import styled from 'styled-components';


export const Container = styled.div`
    display:flex;
`;
export const SideBar = styled.div`
    width: 18%;
    height: 850px;
    background: #26e3e3;
    background: -moz-linear-gradient(top,  #26e3e3 0%, #26e3e3 21%, #26e3e3 28%, #2989d8 55%, #207cca 61%, #207cca 61%, #207cca 62%, #207cca 63%, #207cca 63%, #207cca 64%, #207cca 64%, #207cca 64%, #207cca 65%, #207cca 65%, #207cca 70%, #207cca 70%, #134e4c 100%, #134e4c 100%, #134e4c 100%, #134e4c 100%, #134e4c 100%);
    background: -webkit-linear-gradient(top,  #26e3e3 0%,#26e3e3 21%,#26e3e3 28%,#2989d8 55%,#207cca 61%,#207cca 61%,#207cca 62%,#207cca 63%,#207cca 63%,#207cca 64%,#207cca 64%,#207cca 64%,#207cca 65%,#207cca 65%,#207cca 70%,#207cca 70%,#134e4c 100%,#134e4c 100%,#134e4c 100%,#134e4c 100%,#134e4c 100%);
    background: linear-gradient(to bottom,  #26e3e3 0%,#26e3e3 21%,#26e3e3 28%,#2989d8 55%,#207cca 61%,#207cca 61%,#207cca 62%,#207cca 63%,#207cca 63%,#207cca 64%,#207cca 64%,#207cca 64%,#207cca 65%,#207cca 65%,#207cca 70%,#207cca 70%,#134e4c 100%,#134e4c 100%,#134e4c 100%,#134e4c 100%,#134e4c 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#26e3e3', endColorstr='#134e4c',GradientType=0 );
`;

export const AreaLogo = styled.div`
    width: 82%;
    height: 15vh;
    margin: 8% auto;
    background-color: #FFF;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const Logo = styled.img`
    width: 82%;
`;

export const Legend = styled.div`
    width:90%;
    margin: 0 auto;
    text-align: center;
`;

export const Menu = styled.ul`
    list-style:none;
    width: 100%;
    margin: 0;
    padding: 0;

    li{
        width: 100%;
        display:block;
    }

    a{
        color:#FFF;
        text-decoration:none; 
        padding:15px 15px; 
        display:block;
    }

    a:hover{
        background:#143047;
        color:#fff;
        //text-shadow:0px 0px 5px #fff;   
    }
`;


export const TextLegend = styled.span`
    color: #FFF;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const AreaIndicator = styled.div`
    width: 100vw;
    padding: 0 2% 0 2%;
`;
export const Header = styled.div`
    height: 11vh;
    display:flex;
    align-items:center;
    padding:1% 0 0 0;
`;

export const Text = styled.span`
    color:#143047;
    font-weight: bold;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const Indicator = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
`;

export const Cardbox = styled.div`
    width: 49.3%;
    height: 45.5vh;
    background-color:#EEEEEE;
    border-radius: 9px;
    margin-top: 1%;
    overflow: hidden;
`;

export const Content = styled.div`

    flex: 1;
    
    width: 100%;
    height: 290px;
    overflow-y: scroll;

    img{
        width:45px;
        height:45px;
        border-radius:50px;
    }

    strong{
        font-size: 12px;
        color:#2E2E2E;
    }

    span{
        font-size: 9px;
        color:#2E2E2E;
    }

    td{
        height: 60px;
        border-bottom: 2px solid #E6E6E6;
    }

    .contentUsers{
        padding: 1%;
        border-bottom: 2px solid #E6E6E6;
    }

    .avatar{
        width: 12%;
        text-align: center;
        
    }

    .name{
        margin-right: 4%;
        width: 35%;
        text-indent: 2%;
    }

    .room{
        font-size: 12px;
        color:#2E2E2E;
        width: 10%;
        text-align:center;
    }
    .dateHour{
        font-size: 12px;
        color:#2E2E2E;
        width: 20%;
        text-align:center;
    }

    .btn{
        width: 40%;
        text-align:center;
    }

    .button{
        background-color:#0bb7b7;
        border-radius:6px;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Arial;
        font-size:12px;
        font-weight:bold;
        padding:5px 11px;
        text-decoration:none;
        margin-top: 12px;
    }

    .button:hover {
        background-color:#0688fa;
    }
    .button:active {
        position:relative;
        top:1px;
    }

    .dependents{
        margin-right: 4%;
        width: 7%;
        text-align: center;
        font-size: 12px;
    }

    .status-icon{
        width: 5%;
        text-align:right;
    }

    .status{
        margin-right: 4%;
        width: 13%;
        text-align: left;
        font-size: 12px;
    }

    .iconUser{
        width:50%;
        height:50%;
        color: #6E6E6E; 
    }
    
    .icon{
        width:70%;
        height:70%;
        color: #6E6E6E;  
    }

   


`;


export const HeaderBox = styled.div`
    height: 5.5vh;
    background-color:#143047;
    border-radius: 7px 7px 0 0;
    display:flex;
    align-items:center;
    justify-content: space-between;
`;

export const HeaderText = styled.span`
    color: #FFF;
    font-size: 13px;
    margin: 4%;

    .linkviewall{
        text-decoration:none;
        color:#FFF;
    }
`;





