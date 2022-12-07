---
title: Overview
---

# {{ $frontmatter.title }}

## Import SVG

![](./assets/import_svg.png)

![](./assets/svg.png)

[See more](/import-export/index.html#svg)

## Add Bones

Select a armature and change `Edit` mode.

![](./assets/object_mode.png)

![](./assets/edit_mode.png)

Add and edit Bones.

![](./assets/add_bones.png)

[See more](mode/edit)

## Weight Paint

Change `Weight` mode.

<!-- ![](./assets/weight_mode.png) -->

Select SVG elements and bind to bones.

![](./assets/bind_elm.png)

[See more](mode/weight-paint)

## Pose

Change `Pose` mode.

![](./assets/pose_mode.png)

Transform bones to transform bound SVG elements.

![SVG kinematic animation via bones: pose](./assets/pose.png)

[See more](mode/pose)

## Insert Keyframes

Insert keyframes to save the transformations of bones at the frame.

![SVG kinematic animation via bones: insert keyframes](./assets/key.png)

[See more](mode/pose.html#insert-keyframes)

## Play Animation

The transformations between keyframes are interpolated automatically.

![SVG kinematic animation via bones: animate](./assets/play.gif)

[See more](animation/controller)

## Bake and Export

Export baked animations.

![](./assets/import_svg.png)

[See more](/import-export/index.html#export)

## Play in a web page

![](./assets/client.gif)

[Client player is here](https://github.com/miyanokomiya/blendic-svg-player)

## Export animated SVG.

Animations can be exported as authentic SVG with CSS animation, like these.

![SVG kinematic animation: jumping](./assets/jump-anim.svg)
![SVG kinematic animation: rotating](./assets/rotate.svg)
![SVG kinematic animation: boxing](./assets/boxing-anim.svg)

[See more](/import-export/index.html#export)
