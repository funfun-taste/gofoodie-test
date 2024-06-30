import { KakaoMap } from "@components/kakao/KakaoMap";
import * as styles from "./page.css";
import { RecentFeed } from "@components/feeds/RecentFeed";
import { ReommendUser } from "@components/users/RecommendUser";
import { RegionFilter } from "@components/feeds/RegionFilter";
import { FeedHome } from "@components/feeds/FeedHome";

export default async function Home() {
  return (
    <div className={styles.homeContainerLayout}>
      {/* 카카오맵 */}
      <KakaoMap />
      {/* 최근 작성한 여행기 */}
      <RecentFeed />
      {/* 추천 유저 */}
      <ReommendUser />
      {/* 지역 필터 */}
      <RegionFilter />
      {/* 피드 홈 */}
      <FeedHome />
    </div>
  );
}
