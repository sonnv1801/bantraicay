
import Introduce from './Components/Header/Introduce';
import Navbar from './Components/Menu/Navbar';


const HeaderIntroduce = {
  phone: '+84-375-521-434',
  email: 'YOUR@GMAIL.COM',
  letter: '3-5 NGÀY GIAO HÀNG VÀ ĐỔI TRẢ MIỄN PHÍ'
}

function HomePage() {
  return (
   <div>
     <Introduce
       phone = {HeaderIntroduce.phone} 
       email = {HeaderIntroduce.email} 
       letter = {HeaderIntroduce.letter} 
     />
     <Navbar/>
   </div>
  );
}

export default HomePage;
