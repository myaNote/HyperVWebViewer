# HyperVMonitor
HyperVMonitor is a web application for monitoring VMs on the Hyper-V written in golang.
There is an application "Hyper-V Manager" for controlling and monitoring VMs on the Hyper-V
but that is for management.

The system manager in company don't want users to change the CPU and memory on the vm, I think.
The Hyper-V Manger can do that, even thus it can change any Hyper-V setting. 

HyperVMonitor is a monitoring web application for users.
HyperVMonitor allow users to check the VMs' information and start VMs.

![screenshot](http://blog.myanote.com/wp-content/uploads/2016/05/hypervmonitor.png)

## Usage
Type the following command and go to the web page `http://localhost:8080/`.
``` cmd
> git clone git@github.com:myaNote/HyperVMonitor.git
> cd HyperVMonitor
> go run hyperVMonitor.go
```

## Feature
* Display the VMs' information such as CPUUsage, MemoryAssigned and Uptime.
* Start a VM.

![gif](http://blog.myanote.com/wp-content/uploads/2016/05/startVM.gif)

## Add a Windows Service
The following command is for adding HyperVMonitor as a windows service. 
``` bash
> go build hyperVMonitor.go
> sc create HyperVMonitor binPath= "<path_to_the_HyperVMonitor.exe>"
```


