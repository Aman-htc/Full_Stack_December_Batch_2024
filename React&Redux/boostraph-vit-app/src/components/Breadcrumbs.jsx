import { ArrowRight, ChevronLeft, ChevronRight, CodeSquare, Folder, FolderFill,GearFill } from 'react-bootstrap-icons';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

function Breadcrumbs() {

  const CustomLink = (props) => {
    const { href, children } = props;

    return (
      <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Link to={href}>{children}</Link> {' '}
       
        <ChevronRight size={12} />
         {' '}
      </span>
    );
  };
  const CustomFolder = (props) => {
    const { href, children } = props;

    return (
      <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>

        <Folder size={16} color='yellow' />
        <Link to={href}>{children}</Link> {' '}
         <ChevronRight size={12} />
       
        
         {' '}
      </span>
    );
  };

  return (
    <>
      <h3 className='text-primary'>Breadcrumb</h3>
      <hr />

      <Breadcrumb>
        <Breadcrumb.Item  bsPrefix=' '  className='me-3' linkAs={CustomLink} href="/">
          Cloud
        </Breadcrumb.Item>

        <Breadcrumb.Item bsPrefix=' '  className='me-3' linkAs={CustomLink} href="/library">
          Files
        </Breadcrumb.Item>

        <Breadcrumb.Item  bsPrefix=' ' linkAs={CustomLink} className='me-3'>Project</Breadcrumb.Item>
        <Breadcrumb.Item active>Project Name</Breadcrumb.Item>
      </Breadcrumb>


      <Breadcrumb>
        <Breadcrumb.Item  bsPrefix=' '  className='me-3' linkAs={CustomFolder} href="/">
          Assigments
        </Breadcrumb.Item>

        <Breadcrumb.Item bsPrefix=' '  className='me-3' linkAs={CustomFolder} href="/library">
          Project
        </Breadcrumb.Item>

        
        <Breadcrumb.Item active>
    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <CodeSquare size={16} className='text-info' />
      Todo List
    </span>
  </Breadcrumb.Item>
      </Breadcrumb>



          
    </>


  );
}

export default Breadcrumbs;
