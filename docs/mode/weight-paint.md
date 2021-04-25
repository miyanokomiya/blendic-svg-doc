---
title: Weight Paint Mode
---

# {{ $frontmatter.title }}

## Import SVG

You need to import SVG file beforehand to start this mode.  

![](./assets/import_svg.png)

[See mode](/import-export/index.html#svg)

## Select an Element

Click an element to select it.

![](./assets/select_elm.png)

### Element Tree

You can also select elements from the tree.

Click `Tree` tab on the right side of the screen to display the tree panel.

![](./assets/tree.png)

Click tree node to select.  
If you want to select invisible elements, e.g. `<g>`, you have to select them in the tree.

![](./assets/select_from_tree.png)

## Bind Armature

Select an armature to bind to the entire SVG in the item panel.

![](./assets/bind_armature.png)


## Bind Bone

Select a bone to bind to each bone in the item panel.

![](./assets/bind_bone.png)


## Bind Bone to Viewbox

If you select root svg node, you can bind bone to it's `viewBox`.

![](./assets/bind_viewbox.png)


## Bind Bone to Color

If you select elements that can have the attributes of `fill` and `stroke`, you can bind bone to the attributes.

![](./assets/bind_color.png)

:::tip
Colors are represented by HSVA.  
The transfomations of bound bone represent HSVA.
- rotate: H
- translate X: S
- translate Y: V
- scale X: A
:::
