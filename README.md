# HyperVWebViewer
HyperVWebViewer is a web application viewer of VMs on the Hyper-V written in golang.
There is an application "Hyper-V Manager" for controlling and monitoring VMs on the Hyper-V
but that is for managers, not users.

The system manager in company don't want users to change the CPU and memory on the vm, I think.
The Hyper-V Manger can do that, even thus it can change any Hyper-V setting. 

HyperVWebViewer is a web application viewer for users.
HyperVWebViewer allow users to check the VMs' information and start VMs.

![HyperV Web Viewer Screenshot](http://blog.myanote.com/wp-content/uploads/2016/05/HyperVWebViewer-1.png)

## Usage
Type the following command and go to the web page `http://localhost:8080/`.
``` cmd
> git clone git@github.com:myaNote/HyperVWebViewer.git
> cd HyperVWebViewer
> go run hyperVWebViewer.go
```

## Feature
* Display the VMs' information such as CPUUsage, MemoryAssigned and Uptime.
* Start a VM.

![Start VM GIF](http://blog.myanote.com/wp-content/uploads/2016/05/startVM-1.gif)

## Add a Windows Service
The following command is for adding HyperVWebViewer as a windows service. 
``` bash
> go build hyperVWebViewer.go
> sc create HyperVWebViewer binPath= "<path_to_the_HyperVWebViewer.exe>"
```


