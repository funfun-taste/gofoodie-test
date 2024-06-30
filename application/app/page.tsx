import { KakaoMap } from "@components/kakao/KakaoMap";
import * as styles from "./page.css";
import { FeedSkeleton } from "@components/common/skeleton/FeedSkeleton";
import FlexBox from "@components/common/boxes/FlexBox";
import { RecentFeed } from "@components/feeds/RecentFeed";
import { ReommendUser } from "@components/users/RecommendUser";
import { RegionFilter } from "@components/feeds/RegionFilter";
import { FeedHome } from "@components/feeds/FeedHome";

export default async function Home() {
  return (
    <div className={styles.homeContainerLayout}>
      <KakaoMap />

      <RecentFeed />

      <ReommendUser />

      <RegionFilter />

      <FeedHome />
    </div>
  );
}
