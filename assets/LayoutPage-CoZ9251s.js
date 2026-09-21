import{D as e,S as t,T as n,c as r,d as i,f as a,i as o,o as s,t as c,w as l}from"./stack-DYiNv4jc.js";import{n as u,t as d}from"./circle-11HQsSNe.js";import{t as f}from"./grid-DmAwhUq5.js";import{n as p,r as m,t as h}from"./CodeHint-OBWtzmuc.js";import{t as g}from"./h-stack-azyYO1X5.js";import{g as _,r as v}from"./index-9NLE7t2i.js";var{withContext:y,PropsProvider:b}=r({key:`container`}),x=y(`div`),S=l(),C=e(n(),1);function w(e){return o(e,e=>e===`auto`?`auto`:`span ${e}/span ${e}`)}var T=(0,C.forwardRef)(function(e,n){let{area:r,colSpan:i,colStart:o,colEnd:s,rowEnd:c,rowSpan:l,rowStart:u,css:d,...f}=e,p=(0,C.useMemo)(()=>t({gridArea:r,gridColumn:w(i),gridRow:w(l),gridColumnStart:o,gridColumnEnd:s,gridRowStart:u,gridRowEnd:c}),[r,i,o,s,c,l,u]);return(0,S.jsx)(a.div,{ref:n,css:[p,d],...f})});T.displayName=`GridItem`;var E=(0,C.forwardRef)(function(e,t){return(0,S.jsx)(c,{align:`center`,...e,direction:`column`,ref:t})});E.displayName=`VStack`;function D(){return(0,S.jsxs)(p,{title:`Box`,text:`Box is the most basic Chakra UI layout component and can be styled using Chakra style props.`,children:[(0,S.jsxs)(i,{p:`6`,bg:`bg.subtle`,border:`1px solid`,borderColor:`border`,borderRadius:`xl`,children:[(0,S.jsx)(s,{color:`fg`,fontWeight:`bold`,children:`A simple Box component`}),(0,S.jsx)(s,{mt:`2`,color:`fg.muted`,lineHeight:`1.8`,children:`Padding, background, border, radius, spacing, and other styles can be applied directly through props.`})]}),(0,S.jsx)(h,{code:`<Box
    p="6"
    bg="bg.subtle"
    border="1px solid"
    borderColor="border"
    borderRadius="xl"
>
    Content
</Box>`})]})}function O(){return(0,S.jsxs)(p,{title:`Flex`,text:`Flex provides a convenient way to create flexible horizontal and vertical layouts.`,children:[(0,S.jsx)(v,{direction:{base:`column`,md:`row`},gap:`4`,children:[1,2,3].map(e=>(0,S.jsx)(i,{flex:`1`,minH:`100px`,display:`flex`,alignItems:`center`,justifyContent:`center`,bg:`bg.subtle`,border:`1px solid`,borderColor:`border`,borderRadius:`xl`,children:(0,S.jsxs)(s,{color:`fg`,fontWeight:`bold`,children:[`Flex Item `,e]})},e))}),(0,S.jsx)(h,{code:`<Flex
    direction={{
        base: "column",
        md: "row",
    }}
    gap="4"
>
    ...
</Flex>`})]})}function k(){return(0,S.jsxs)(p,{title:`Grid`,text:`Grid creates structured two-dimensional layouts using rows, columns, gaps, and responsive values.`,children:[(0,S.jsx)(f,{templateColumns:{base:`1fr`,md:`repeat(2, 1fr)`,lg:`repeat(3, 1fr)`},gap:`4`,children:[1,2,3,4,5,6].map(e=>(0,S.jsx)(T,{minH:`100px`,display:`flex`,alignItems:`center`,justifyContent:`center`,bg:`bg.subtle`,border:`1px solid`,borderColor:`border`,borderRadius:`xl`,children:(0,S.jsxs)(s,{color:`fg`,fontWeight:`bold`,children:[`Grid Item `,e]})},e))}),(0,S.jsx)(h,{code:`<Grid
    templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
    }}
    gap="4"
>
    ...
</Grid>`})]})}function A({children:e}){return(0,S.jsx)(i,{px:`5`,py:`4`,bg:`bg.subtle`,border:`1px solid`,borderColor:`border`,borderRadius:`lg`,children:(0,S.jsx)(s,{color:`fg`,fontWeight:`bold`,children:e})})}function j(){return(0,S.jsxs)(p,{title:`Stack`,text:`Stack, HStack, and VStack make it easy to arrange elements with consistent spacing.`,children:[(0,S.jsxs)(c,{gap:`8`,children:[(0,S.jsxs)(c,{gap:`3`,children:[(0,S.jsx)(s,{color:`fg.muted`,fontSize:`sm`,fontWeight:`bold`,children:`Vertical Stack`}),(0,S.jsxs)(E,{gap:`3`,align:`stretch`,children:[(0,S.jsx)(A,{children:`First Item`}),(0,S.jsx)(A,{children:`Second Item`}),(0,S.jsx)(A,{children:`Third Item`})]})]}),(0,S.jsxs)(c,{gap:`3`,children:[(0,S.jsx)(s,{color:`fg.muted`,fontSize:`sm`,fontWeight:`bold`,children:`Horizontal Stack`}),(0,S.jsxs)(g,{gap:`3`,flexWrap:`wrap`,children:[(0,S.jsx)(A,{children:`First`}),(0,S.jsx)(A,{children:`Second`}),(0,S.jsx)(A,{children:`Third`})]})]})]}),(0,S.jsx)(h,{code:`<Stack gap="3">
    <Box>First</Box>
    <Box>Second</Box>
    <Box>Third</Box>
</Stack>`})]})}function M(){return(0,S.jsx)(p,{title:`Container`,text:`Container constrains content to a maximum width while keeping it centered within the available space.`,children:(0,S.jsx)(i,{bg:`bg.subtle`,border:`1px solid`,borderColor:`border`,borderRadius:`xl`,py:`6`,children:(0,S.jsx)(x,{maxW:`3xl`,px:`5`,children:(0,S.jsxs)(c,{gap:`3`,p:`6`,bg:`bg`,border:`1px solid`,borderColor:`border`,borderRadius:`lg`,children:[(0,S.jsx)(s,{color:`fg`,fontWeight:`bold`,children:`Centered Container Content`}),(0,S.jsx)(s,{color:`fg.muted`,lineHeight:`1.8`,children:`This content has a maximum width and remains centered as the available screen width changes.`})]})})})})}function N(){return(0,S.jsx)(p,{title:`Center`,text:`Center, Square, and Circle provide convenient primitives for centering content and creating equal-sized shapes.`,children:(0,S.jsxs)(c,{gap:`8`,children:[(0,S.jsx)(_,{minH:`140px`,bg:`bg.subtle`,border:`1px solid`,borderColor:`border`,borderRadius:`xl`,children:(0,S.jsx)(s,{color:`fg`,fontWeight:`bold`,children:`Perfectly Centered`})}),(0,S.jsxs)(g,{gap:`5`,flexWrap:`wrap`,children:[(0,S.jsx)(u,{size:`100px`,bg:`teal.500`,borderRadius:`lg`,children:(0,S.jsx)(s,{color:`white`,fontWeight:`bold`,children:`Square`})}),(0,S.jsx)(d,{size:`100px`,bg:`purple.500`,children:(0,S.jsx)(s,{color:`white`,fontWeight:`bold`,children:`Circle`})})]})]})})}function P(){return(0,S.jsxs)(c,{gap:`8`,children:[(0,S.jsx)(m,{title:`Layout`,text:`Explore Chakra UI layout primitives for building flexible, responsive, and well-structured interfaces.`}),(0,S.jsx)(D,{}),(0,S.jsx)(O,{}),(0,S.jsx)(k,{}),(0,S.jsx)(j,{}),(0,S.jsx)(M,{}),(0,S.jsx)(N,{})]})}export{P as default};