---
title: Overview
---

# {{ $frontmatter.title }}

## Import SVG

![](./assets/import_svg.png)

![](./assets/svg.png)

[See mode](/import-export/index.html#svg)

## Add Bones

Select a armature and change `Edit` mode.

![](./assets/object_mode.png)

![](./assets/edit_mode.png)

Add and edit Bones.

![](./assets/add_bones.png)

[See mode](mode/edit)

## Weight Paint

Change `Weight` mode.

<!-- ![](./assets/weight_mode.png) -->

Select SVG elements and bind to bones.

![](./assets/bind_elm.png)

[See mode](mode/weight-paint)

## Pose

Change `Pose` mode.

![](./assets/pose_mode.png)

Transform bones to transform bound SVG elements.

![](./assets/pose.png)

[See mode](mode/pose)

## Insert Keyframes

Insert keyframes to save the transformations of bones at the frame.

![](./assets/key.png)

[See mode](mode/pose.html#insert-keyframes)

## Play Animation

The transformations between keyframes are interpolated automatically.

![](./assets/play.gif)

[See mode](animation/controller)

## Bake and Export

Export baked animations.

![](./assets/import_svg.png)

[See mode](/import-export/index.html#export-baked-actions)

## Play in a web page

![](./assets/client.gif)

[Client player is here](https://github.com/miyanokomiya/blendic-svg-player)

<!-- TODO [See mode](export) -->
