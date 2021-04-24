import{o as e,c as t,a as l,b as a,t as s}from"./app.6b34e1e6.js";const n='{"title":"Pose Mode","description":"","frontmatter":{"title":"Pose Mode"},"headers":[{"level":2,"title":"Select a bone","slug":"select-a-bone"},{"level":2,"title":"Shift Select bones","slug":"shift-select-bones"},{"level":2,"title":"All Select bones","slug":"all-select-bones"},{"level":2,"title":"Grab","slug":"grab"},{"level":2,"title":"Rotate","slug":"rotate"},{"level":2,"title":"Scale","slug":"scale"},{"level":2,"title":"Relationhsip","slug":"relationhsip"},{"level":3,"title":"Connect","slug":"connect"},{"level":3,"title":"Inherit Rotation","slug":"inherit-rotation"},{"level":3,"title":"Inherit Scale","slug":"inherit-scale"},{"level":2,"title":"Insert Keyframes","slug":"insert-keyframes"}],"relativePath":"mode/pose.md","lastUpdated":1619270048768}',o={},i={id:"frontmatter-title"},r=l("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),c=l("h2",{id:"select-a-bone"},[l("a",{class:"header-anchor",href:"#select-a-bone","aria-hidden":"true"},"#"),a(" Select a bone")],-1),h=l("p",null,[a("Click a bone to select the armature."),l("br"),a(" In pose mode, you can't select the bone's head and tail separately.")],-1),d=l("h2",{id:"shift-select-bones"},[l("a",{class:"header-anchor",href:"#shift-select-bones","aria-hidden":"true"},"#"),a(" Shift Select bones")],-1),p=l("p",null,[a("You can also select bones continuously by holding "),l("code",null,"Shift"),a(" and click."),l("br"),a(" If the targets have been selected already, "),l("code",null,"Shift + Click"),a(" will clear the selection.")],-1),u=l("h2",{id:"all-select-bones"},[l("a",{class:"header-anchor",href:"#all-select-bones","aria-hidden":"true"},"#"),a(" All Select bones")],-1),b=l("p",null,[a("Press "),l("code",null,"a"),a(" to select all bones."),l("br"),a(" If all bones have been selected already, pressing "),l("code",null,"a"),a(" will clear the selection.")],-1),f=l("h2",{id:"grab"},[l("a",{class:"header-anchor",href:"#grab","aria-hidden":"true"},"#"),a(" Grab")],-1),g=l("p",null,[a("Press "),l("code",null,"g"),a(" to start the operation to grab bones."),l("br"),a(" Then move the mouse to update their locations.")],-1),m=l("p",null,"Finally, left-click to complete or right-click to cancel the operation.",-1),v=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"TIP"),l("p",null,"Unlike the edit mode, you will edit the posing of the bones for each frame in this mode.")],-1),y=l("h2",{id:"rotate"},[l("a",{class:"header-anchor",href:"#rotate","aria-hidden":"true"},"#"),a(" Rotate")],-1),k=l("p",null,[a("Press "),l("code",null,"r"),a(" to start the operation to rotate bones."),l("br"),a(" Then move the mouse to update their rotations from each head.")],-1),_=l("p",null,"Finally, left-click to complete or right-click to cancel the operation.",-1),I=l("p",null,[l("img",{src:"/blendic-svg-doc/assets/pose_rotate_from.61e6dde0.png",alt:""}),l("img",{src:"/blendic-svg-doc/assets/pose_rotate_to.56e57b9e.png",alt:""})],-1),S=l("h2",{id:"scale"},[l("a",{class:"header-anchor",href:"#scale","aria-hidden":"true"},"#"),a(" Scale")],-1),w=l("p",null,[a("Press "),l("code",null,"s"),a(" to start the operation to scale bones."),l("br"),a(" Then move the mouse to update their scale.")],-1),P=l("p",null,"Finally, left-click to complete or right-click to cancel the operation.",-1),R=l("p",null,[l("img",{src:"/blendic-svg-doc/assets/pose_scale_from.d8356252.png",alt:""}),l("img",{src:"/blendic-svg-doc/assets/pose_scale_to.80111d9b.png",alt:""})],-1),C=l("h2",{id:"relationhsip"},[l("a",{class:"header-anchor",href:"#relationhsip","aria-hidden":"true"},"#"),a(" Relationhsip")],-1),A=l("p",null,"You can change the relationship between parent bone and child one.",-1),G=l("p",null,[l("img",{src:"/blendic-svg-doc/assets/bone_relation.e66b8b28.png",alt:""})],-1),N=l("h3",{id:"connect"},[l("a",{class:"header-anchor",href:"#connect","aria-hidden":"true"},"#"),a(" Connect")],-1),T=l("p",null,[a("If it is true, the bone's location is fixed the parent."),l("br"),a(" If it is false, the bone can move relatively from the parent.")],-1),x=l("p",null,[l("img",{src:"/blendic-svg-doc/assets/connect_from.6a177c82.png",alt:""}),l("img",{src:"/blendic-svg-doc/assets/connect_to.b2d0c766.png",alt:""})],-1),F=l("div",{class:"warning custom-block"},[l("p",{class:"custom-block-title"},"WARNING"),l("p",null,[a("Some operations in edit mode separate the parent's tail and the child's head. In this case, "),l("code",null,"Connect"),a(" property is set false automatically.")])],-1),M=l("h3",{id:"inherit-rotation"},[l("a",{class:"header-anchor",href:"#inherit-rotation","aria-hidden":"true"},"#"),a(" Inherit Rotation")],-1),Y=l("p",null,"If it is false, the bone's rotation are not affected by the parent's rotation.",-1),K=l("p",null,[l("img",{src:"/blendic-svg-doc/assets/inherit_rotation_on.18ba3b31.png",alt:""}),l("img",{src:"/blendic-svg-doc/assets/inherit_rotation_off.326f393a.png",alt:""})],-1),U=l("h3",{id:"inherit-scale"},[l("a",{class:"header-anchor",href:"#inherit-scale","aria-hidden":"true"},"#"),a(" Inherit Scale")],-1),W=l("p",null,"If it is false, the bone's scale are not affected by the parent's scale.",-1),j=l("p",null,[l("img",{src:"/blendic-svg-doc/assets/inherit_scale_on.0f1cf107.png",alt:""}),l("img",{src:"/blendic-svg-doc/assets/inherit_scale_off.e479ed36.png",alt:""})],-1),z=l("h2",{id:"insert-keyframes"},[l("a",{class:"header-anchor",href:"#insert-keyframes","aria-hidden":"true"},"#"),a(" Insert Keyframes")],-1),$=l("p",null,[a("Press "),l("code",null,"i"),a(" to show the menu of insert keyframes."),l("br"),a(" Selet an item to target keyframes.")],-1),q=l("p",null,[l("img",{src:"/blendic-svg-doc/assets/insert_keyframes.7d4990c5.png",alt:""})],-1),B=l("p",null,[a("You can also insert keyframes from the item panel."),l("br"),a(" Click the dots at the right of each input field.")],-1),D=l("p",null,[l("img",{src:"/blendic-svg-doc/assets/insert_keyframes_from_panel.4c0953cf.png",alt:""})],-1),E=l("p",null,"Inserted keyframes are displayed in the timeline at the bottom of the screen.",-1),H=l("p",null,[l("img",{src:"/blendic-svg-doc/assets/keyframes.53a2e530.png",alt:""})],-1),J=l("div",{class:"warning custom-block"},[l("p",{class:"custom-block-title"},"WARNING"),l("p",null,[a("Moving current frame without inserting keyframes will reset the editing pose."),l("br"),a(" In this case, "),l("code",null,"Ctrl + z"),a(" may help you.")])],-1);o.render=function(n,o,L,O,Q,V){return e(),t("div",null,[l("h1",i,[r,a(" "+s(n.$frontmatter.title),1)]),c,h,d,p,u,b,f,g,m,v,y,k,_,I,S,w,P,R,C,A,G,N,T,x,F,M,Y,K,U,W,j,z,$,q,B,D,E,H,J])};export default o;export{n as __pageData};
