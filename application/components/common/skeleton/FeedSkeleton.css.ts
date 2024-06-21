import { keyframes, style } from "@vanilla-extract/css";

const loading = keyframes({
  "100%": {
    backgroundPosition: "-100% 0",
  },
});

export const FeedSkeletonContainer = style({
  width: "100%",
  height: 300,
  zIndex: 2,
  padding: '10px 20px'
});

export const FeedSkeletonTop = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 20
})

export const Avatar = style({
  width: 40,
  height: 40,
  borderRadius: "50%"
});

export const AvatarName = style({
  width: 100,
  height: 16,
  borderRadius: 20
})

export const SubContent = style({
  width: 240,
  height: 16,
  borderRadius: 20
})

export const Content = style({
  width: '100%',
  height: 200
})

export const FeedSkeletonOverlay = style({
  background:
    "linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 20%)",
  backgroundSize: "200% 100%",
  backgroundPosition: "100% 0",
  animation: `${loading} 1.2s infinite`,
});
