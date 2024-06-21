import { CSSProperties, ReactElement } from "react";
import * as styles from "./Skeleton.css";

interface SkeletonProps {
  isLoading: boolean;
  width?: string | number;
  height?: string | number;
}

export const Skeleton = (props: SkeletonProps): ReactElement => {
  const { isLoading, width = 428, height = 300 } = props;

  const inlineStyle: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <>
      {isLoading ? (
        <div style={inlineStyle} className={styles.LoadingMapOverlay} />
      ) : null}
    </>
  );
};
