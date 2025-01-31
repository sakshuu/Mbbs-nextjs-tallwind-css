
import Myblogs from "./Blogs/page";
import Myfooter from "./Footer/Myfooter";
import PhotoGallery from "./Gallery/page";
import NavHome from "./home/page";
import MyNavbar from "./MyNavigatonbar/page";
import InstituteSeaction from "./MySwiper/page";
import ServicesSeaction from "./Services/page";

export default function Home() {
  return (<>
  <MyNavbar/>
  <NavHome/>
  <InstituteSeaction/>
  <ServicesSeaction/>
  <Myblogs/>
  <PhotoGallery/>
  <Myfooter/>
  </>
  );
}
