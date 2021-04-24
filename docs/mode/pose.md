---
title: Pose Mode
---

# {{ $frontmatter.title }}

## Select a bone

Click a bone to select the armature.  
In pose mode, you can't select the bone's head and tail separately.


## Shift Select bones
You can also select bones continuously by holding `Shift` and click.  
If the targets have been selected already, `Shift + Click` will clear the selection.


## All Select bones

Press `a` to select all bones.  
If all bones have been selected already, pressing `a` will clear the selection.


## Grab

Press `g` to start the operation to grab bones.  
Then move the mouse to update their locations.

Finally, left-click to complete or right-click to cancel the operation.

::: tip
Unlike the edit mode, you will edit the posing of the bones for each frame in this mode.
:::


## Rotate

Press `r` to start the operation to rotate bones.  
Then move the mouse to update their rotations from each head.

Finally, left-click to complete or right-click to cancel the operation.

![](./assets/pose_rotate_from.png)
![](./assets/pose_rotate_to.png)

## Scale

Press `s` to start the operation to scale bones.  
Then move the mouse to update their scale.

Finally, left-click to complete or right-click to cancel the operation.

![](./assets/pose_scale_from.png)
![](./assets/pose_scale_to.png)

## Relationhsip

You can change the relationship between parent bone and child one.

![](./assets/bone_relation.png)

### Connect
If it is true, the bone's location is fixed the parent.  
If it is false, the bone can move relatively from the parent.

![](./assets/connect_from.png)
![](./assets/connect_to.png)

::: warning
Some operations in edit mode separate the parent's tail and the child's head. In this case, `Connect` property is set false automatically.
:::

### Inherit Rotation
If it is false, the bone's rotation are not affected by the parent's rotation.

![](./assets/inherit_rotation_on.png)
![](./assets/inherit_rotation_off.png)

### Inherit Scale
If it is false, the bone's scale are not affected by the parent's scale.

![](./assets/inherit_scale_on.png)
![](./assets/inherit_scale_off.png)


## Insert Keyframes

Press `i` to show the menu of insert keyframes.  
Selet an item to target keyframes.

![](./assets/insert_keyframes.png)

You can also insert keyframes from the item panel.  
Click the dots at the right of each input field.

![](./assets/insert_keyframes_from_panel.png)

Inserted keyframes are displayed in the timeline at the bottom of the screen.

![](./assets/keyframes.png)

::: warning
Moving current frame without inserting keyframes will reset the editing pose.  
In this case, `Ctrl + z` may help you.
:::

