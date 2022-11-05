import { useRouter } from "next/router";

const detailCartoonPage = () => {
  const router = useRouter("cartoonId");
  console.log(router.query.cartoonId);
  return (
    <div>
      <span>상세 페이지</span>
    </div>
  );
};

export default detailCartoonPage;
