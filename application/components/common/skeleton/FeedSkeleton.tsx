import {CSSProperties} from "react";
import * as styles from "@/components/common/skeleton/FeedSkeleton.css";
import classNames from "classnames";
import FlexBox from "@/components/common/boxes/FlexBox";

interface SkeletonProps {
  isLoading: boolean;
  width?: string | number;
  height?: string | number;
}

export const FeedSkeleton = (props: SkeletonProps) => {
  const { isLoading, width = 428, height = 300 } = props;

  const inlineStyle: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <>
      {isLoading ? (
        <div style={inlineStyle} className={styles.FeedSkeletonContainer}>
          <FlexBox className={styles.FeedSkeletonTop}>
            <FlexBox gap={10} justifyContent={'flex-start'}>
              <div className={classNames(styles.FeedSkeletonOverlay, styles.Avatar)} />
              <div className={classNames(styles.FeedSkeletonOverlay, styles.AvatarName)} />
            </FlexBox>
            <div className={classNames(styles.FeedSkeletonOverlay, styles.SubContent)} />
          </FlexBox>

          <div>
            <div className={classNames(styles.FeedSkeletonOverlay, styles.Content)} />
          </div>
        </div>
      ) : null}
    </>
  );
}