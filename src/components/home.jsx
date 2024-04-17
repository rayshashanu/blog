import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  // const logout = () => {
  //   dispatch({ type: 'SET_USER', payload: 'user not found' }); 
  //   navigate('/login')
  // }
  const travel = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigate('/travel')
  }

  return (
    <>
    <div style={{color:'beige',backgroundColor:"darkolivegreen",flexDirection:'row',width:'1450px',height:'100px'}}>
    <h1 style={{alignContent:'start',justifyContent:"initial",display:'flex',textAlign:"start"}}>PINCH OF YUM!</h1>
    <div style={{display:'flex',justifyContent:'center',gap:'20px',alignItems:'centre'}}>
    <button style={{backgroundColor:'beige',width:'100px',height:'30px',padding:'10px',borderRadius:'30px'}}>home</button>
    <button style={{backgroundColor:'beige',width:'100px',height:'30px',padding:'10px',borderRadius:'30px'}}>food</button>
    <button style={{backgroundColor:'beige',width:'100px',height:'30px',padding:'10px',borderRadius:'30px'}}>contact</button>
    </div>
    </div>
    <centre>
    <div style={{backgroundImage:`url(new1.jpg)`,height:'800px',width:'1550px',backgroundSize:'cover',backgroundRepeat:'no-repeat',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'10px'}}>
    <div style={{alignItems:'center',display:'flex',justifyContent:"center",color:'beige',backgroundColor:"darkolivegreen",flexDirection:'row',width:'700px',height:'800px',border:'solid',borderColor:'beige',flexDirection:"column"}}>
      <h1>SIMPLE RECIPES MADE FOR</h1>
      <div>real, actual, everyday life.</div>
    </div>
    </div>
    </centre>
    <div style={{justifyContent:'space-around',display:'flex',backgroundColor:'beige'}}>
      <a href='#' onClick={travel}>
      <img src="new5.jpg" alt="" width={"200px"} style={{border:'solid',borderRadius:'100px',borderColor:'beige'}}/>
      <div style={{border:'solid',backgroundColor:'yellow',borderColor:"yellow",padding:'10px'}}>QUICK AND EASY</div>       
      </a>
      <a href='#' >
      <img src="salad.jpg" alt="" width={"200px"} style={{border:'solid',borderRadius:'100px',borderColor:'beige'}}/> 
      <div style={{border:'solid',backgroundColor:'yellow',borderColor:"yellow",padding:'10px'}}>SALADS</div>       
      </a> 
      <a href='#' >
      <img src="healthy.jpg" alt="" width={"200px"} style={{border:'solid',borderRadius:'100px',borderColor:'beige'}}/>
      <div style={{border:'solid',backgroundColor:'yellow',borderColor:"yellow",padding:'10px'}}>HEALTHY</div>        
      </a> 
      <a href='#' >
      <img src="veg.jpg" alt="" width={"200px"} style={{border:'solid',borderRadius:'100px',borderColor:'beige'}}/>
      <div style={{border:'solid',backgroundColor:'yellow',borderColor:"yellow",padding:'10px'}}>VEGETARIAN</div>        
      </a>   
    </div>
    </>
  );
};

export default Home;
