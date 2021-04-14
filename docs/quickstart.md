---
id: quickstart
title: Quickstart
sidebar_label: Quickstart
---

## Install SkyhookML

The fastest way to get started is with the Docker all-in-one container. First, install nvidia-docker; on Ubuntu:

	curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
	sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
	distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
	curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
	curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
	sudo apt update && sudo apt install -y docker-ce docker-ce-cli containerd.io nvidia-container-toolkit
	sudo systemctl restart docker

Then:

	git clone https://github.com/skyhookml/skyhookml.git
	cd skyhookml
	mkdir -p data/items data/models
	docker/allinone/build.sh
	docker/allinone/run.sh

Access your deployment at http://localhost:8080.

## Import Data

Next, let's import some video data into Skyhook.

1. On your computer, prepare a zip file with some video or image files.
2. In Skyhook, press Import Data under Quickstart, and upload the zip file.

![](/img/tutorials/quickstart.png)

![](/img/tutorials/quickstart_import.png)

## Apply a Pre-trained Object Detector

1. From Dashboard, press Apply a Model.
2. Select Object Detection.
3. Select a model and press Add Node.
4. Set an input resolution at which the detector should process images.
5. Go to Pipeline, select the new node, and press Run.

![](/img/tutorials/quickstart_apply_detection.png)

## Visualize the Computed Detections

1. From Pipeline, press Add Node.
2. Select Render Video under Video Manipulation.
3. Select the node, and add the image or video dataset and the object detection outputs as inputs.
4. Run the node.
5. The outputs can be visualized from Datasets.

![](/img/tutorials/add_node_render.png)

![](/img/tutorials/nodes_render_detection.png)
