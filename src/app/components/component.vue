<template>
    <div id="app">
        

    <div class="container">
        <div class="row pt-5">
            <div class="col-md-6">
                
            </div>
            <div class="col-md-6">
                <div class="card">
                     <h3 class="card-header bg-primary mb-3 text-white" >Cars</h3>
                    <div class="card-body">
                        <form @submit.prevent="addCars">
                            <div class="form-group">
                            <input type="text" v-model="car.plate"
                            placeholder="Insert a Plate" 
                            class="form-control">
                            </div >
                            <div class="form-group">
                                <input type="text" v-model="car.model" 
                                class="form-control" placeholder="Insert A Model">
                            </div>
                            <template v-if="editCar === false">
                                <button class="btn btn-primary btn-block"
                                >Send</button>
                            </template>
                            <template v-else>
                                <button class="btn btn-primary btn-block">
                                    Update</button>
                            </template>
                        </form>
                    </div>
                </div>
            </div>
            
    </div>
    <div class="row  pt-5">
            <div class="col-md-6">
                <h2 class="mt-0 ">Table-Drivers</h2>
                <table class="table table-bordered">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="task of tasks">
                            <td>{{task.title}}</td>
                            <td>{{task.description}}</td>
                            

                        </tr>
                    </tbody>

                </table> 
            </div>
            <div class="col-md-6">
                <h2 class="mt-0 ">Table-Cars</h2>
                <table class="table table-bordered">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th>Plate</th>
                            <th>Model</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="car of cars">
                            <td>{{car.plate}}</td>
                            <td>{{car.model}}</td>
                            <td>
                                <button @click="deleteCars(car._id)"
                                class="btn btn-danger">
                                    Delete
                                </button>
                                <button @click="editCars(car._id)"
                                class="btn btn-secondary">
                                    Edit
                                </button>
                            </td>

                        </tr>
                    </tbody>

                </table>    
            </div>
        </div>
    </div>
    
    </div>
</template>

<script>

   class Task{
       constructor(title, description){
           this.title = title;
           this.description = description;
       }
        
    };

    class Cars{
        constructor(plate, model){
           this.plate = plate;
           this.model = model;
       }

    }

export default {
    data() {
        return {
            task: new Task(),
            car: new Cars(),
            tasks:[],
            cars:[],
            edit: false,
            editCar:false,
            taskToEdit:'',
            carToEdit:''
        }
    },
    created(){
        this.getTasks();
        this.getCars();
    },
    
    methods: {
        addTask(){
            if(this.edit === false){
                fetch('/api/tasks', {
                    method: 'POST',
                    body: JSON.stringify(this.task),
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        this.getTasks();
                    })
            } else{
                fetch('/api/tasks/'+ this.taskToEdit, {
                    method: 'PUT',
                    body: JSON.stringify(this.task),
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.getTasks();
                    this.edit = false;
                });
            }


            this.task = new Task();
        },
        getTasks(){
            fetch('/api/tasks')
                .then(res => res.json())
                .then(data => {
                    this.tasks = data;
                    console.log(this.tasks);
            });

        },
        deleteTask(id){
            console.log(id);
           fetch('/api/tasks/'+ id, {
                method:'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'

                }
            })
            .then(res => res.json())
            .then(data => {
                this.getTasks();
            });
        },

        editTask(id){
            fetch('/api/tasks/'+ id)
                .then(res => res.json())
                .then(data => {
                     this.task = new Task(data.title, data.description);
                     this.taskToEdit = data._id;
                     this.edit = true;
                })
                
        },

        //methods Cars
        addCars(){
            if(this.editCar === false){
                fetch('/api/cars', {
                    method: 'POST',
                    body: JSON.stringify(this.car),
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        this.getCars();
                    })
            } else{
                fetch('/api/cars/'+ this.carToEdit, {
                    method: 'PUT',
                    body: JSON.stringify(this.car),
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.getCars();
                    this.editCar = false;
                });
            }


            this.car = new Cars();
        },
        getCars(){
            fetch('/api/cars')
                .then(res => res.json())
                .then(data => {
                    this.cars = data;
                    console.log(this.cars);
            });

        },
        deleteCars(id){
            console.log(id);
           fetch('/api/cars/'+ id, {
                method:'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'

                }
            })
            .then(res => res.json())
            .then(data => {
                this.getCars();
            });
        },

        editCars(id){
            fetch('/api/cars/'+ id)
                .then(res => res.json())
                .then(data => {
                     this.car = new Cars(data.plate, data.model);
                     this.carToEdit = data._id;
                     this.editCar = true;
                })
                
        }
    }
    
}
</script>