---
id: tutorial_sample_video
title: Sample Images from Video
---

Although many tasks involve video, oftentimes you may still want to train image-level models such as object detectors and image classifiers, and apply those models independently on each frame of video.

To help with annotating labels for training such models, SkyhookML provides functionality for sampling images from a video dataset. You can then annotate the sampled images.

## Sample Images

We first need to add a "Sample Video" operation to our execution pipeline.

1. Go to Pipeline, and press Add Node.
2. Create a Sample Video node (under Image/Video).

![](/img/tutorials/sample_images.png)

The new node should appear in your pipeline. Select it and add the video dataset as an input:

![](/img/tutorials/video_sample_edit.png)

Now, press Edit, and configure the node. In particular, set the number of images you want to sample.

Lastly, save the parameters, select the node again, and press Run to execute it. After the job completes, you should be able to see the images in the output dataset:

![](/img/tutorials/video_sample_output_item.png)

## Annotating Images

You can now create an annotation task on the image dataset: go to Dashboard, select Annotate, and select a computer vision task.

![](/img/tutorials/video_sample_annotate.png)
