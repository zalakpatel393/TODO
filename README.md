###  Quick Demo
![todo_demo](https://user-images.githubusercontent.com/31980638/55690410-7e222980-594e-11e9-940d-b1f668c9fb5f.gif)

### Dev IDEs Used:
* Visual Studio Community Edition 2019
* Visual Studio Code 1.31.1

### Frameworks & Versions
* .NET Framework 4.6.1
* Angular7

### DB
* SQLite 4.7.634

### TODO:
* Please make sure to read the TODO tasks in Visual Stuidio Tasks Viewer to update following 2 paths
  1. SQLLite Connection String in Web.config
  2. CORS path for Web UI hosting path,  will look like below..
    config.EnableCors(new EnableCorsAttribute("http://localhost:4200", headers: "*", methods: "*"));
* Update service URI path in TodoUI under shared/todo.service.ts
    readonly rootUrl = "http://localhost:2122";
