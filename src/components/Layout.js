
import Head from "./Head";
import Header from "./header";
import Footer from "./footer";

function Layout({children, title, author }){
	return(
	<div className="container">
      <Head title={title}/>
      <Header prop2='pasta' prop3='k'>Pozdrawiam</Header>
      {children}
      <Footer author={author} />
    </div>
	);
}

export default Layout