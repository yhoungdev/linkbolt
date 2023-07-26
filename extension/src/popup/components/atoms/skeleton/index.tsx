import { FC } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
interface ISkeleton {
  count?: number;
  h?: number;
}

export const DefaultSkeleton: FC<ISkeleton> = ({ count, h }) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton count={count || 1} height={h || ""} />
    </SkeletonTheme>
  );
};
