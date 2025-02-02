import "./custom.css"

import { Component } from "react";

var Table = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    backgroundImage: "url('3079082.jpg')",
    backgroundSize: "cover"
};


var table={
    border:"1px solid black",
    color:"black"
    // backgroundColor:'black'
}

var tr_td={
    border:"1px solid white",
    color:"yellow"
}
   
var th={
    // border:"1px solid grey",
    color:"blue",
    fontWeight:'900'
}
   

function Image () {
    return (

        <>
        
        <marquee behavior="scroll" direction="left" scrollamount={30} loop="infinite">

        <div className="img" style={{display:"flex",alignItems:'center',cursor:"pointer"}}>

            <img src="virat_kohli_has_played_all_ipls_for_rcb_1523090525.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat1.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat2.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://tse1.mm.bing.net/th?id=OIF.Q19yCyCXSX3W40E0D%2bIbbw&pid=Api&P=0&h=180" alt="" style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}} />
            <img src="virat_kohli_has_played_all_ipls_for_rcb_1523090525.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat1.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat2.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://tse1.mm.bing.net/th?id=OIF.Q19yCyCXSX3W40E0D%2bIbbw&pid=Api&P=0&h=180" alt="" style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}} />
            <img src="virat_kohli_has_played_all_ipls_for_rcb_1523090525.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat1.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat2.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://tse1.mm.bing.net/th?id=OIF.Q19yCyCXSX3W40E0D%2bIbbw&pid=Api&P=0&h=180" alt="" style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}} />
            <img src="virat_kohli_has_played_all_ipls_for_rcb_1523090525.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat1.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat2.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://tse1.mm.bing.net/th?id=OIF.Q19yCyCXSX3W40E0D%2bIbbw&pid=Api&P=0&h=180" alt="" style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}} />
            <img src="virat_kohli_has_played_all_ipls_for_rcb_1523090525.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat1.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat2.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://tse1.mm.bing.net/th?id=OIF.Q19yCyCXSX3W40E0D%2bIbbw&pid=Api&P=0&h=180" alt="" style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}} />
            <img src="virat_kohli_has_played_all_ipls_for_rcb_1523090525.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat1.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat2.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://tse1.mm.bing.net/th?id=OIF.Q19yCyCXSX3W40E0D%2bIbbw&pid=Api&P=0&h=180" alt="" style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}} />
            <img src="virat_kohli_has_played_all_ipls_for_rcb_1523090525.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat1.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat2.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://tse1.mm.bing.net/th?id=OIF.Q19yCyCXSX3W40E0D%2bIbbw&pid=Api&P=0&h=180" alt="" style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}} />
            <img src="virat_kohli_has_played_all_ipls_for_rcb_1523090525.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat1.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat2.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://tse1.mm.bing.net/th?id=OIF.Q19yCyCXSX3W40E0D%2bIbbw&pid=Api&P=0&h=180" alt="" style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}} />
            <img src="virat_kohli_has_played_all_ipls_for_rcb_1523090525.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat1.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="virat2.jpg" alt=""   style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}}/>
            <img src="https://tse1.mm.bing.net/th?id=OIF.Q19yCyCXSX3W40E0D%2bIbbw&pid=Api&P=0&h=180" alt="" style={{borderRadius:30,height:"40vh",width:"40vw",margin:"5px",boxShadow:"20px 20px 20px 0px rgba(6, 5, 5, 0.2)"}} />

        </div>

        </marquee>
        
        </>

    );
}

class Lists extends Component{
    render () {
        return (

            <>
            <div className="List">

                <div className="Achivements">

                <h3>Achivements</h3>

                <ul>
                    <li>890 rating points in the ICC ODI ranking</li>
                    <li>highest ICC rating points (922) in the ICC Player Rankings for Test Batsmen</li>
                    <li>six double-centuries as a captain in test matches</li>
                    <li>most number of 150+ scores as captain in Tests</li>
                    <li>consecutive 3 centuries in against two opponents </li>
                </ul>

                </div>

                <div className="cars">

                <h3>Cars Owned by Virat Kohli</h3>

                <ol>
                    <li>Bentley Continental GT-	INR 4.04 Crore</li>
                    <li>Bentley Flying Spur	- INR 3.41 Crore</li>
                    <li>Audi R8 LMX	- INR 2.97 Crore</li>
                    <li>Range Rover Vogue - INR 2.11 Crore</li>
                    <li>Porsche Panamera -  INR 1.68 Crore</li>
                </ol>

                </div>

            </div>
                       
            </>

        );
    }
}

function Result () {
    return (

        <>

        <h3>Recent Text Centuries</h3>

        <div className="Table" style={Table}>

        
            <table style={table} className="table1">
    
                <tr style={tr_td}>
                <th style={th}>NO.</th>
                <th style={th}>RUNS</th>
                <th style={th}>AGAINST</th>
                <th style={th}>DATE</th>
                </tr>
                <tr style={tr_td}>
                <td>1</td>
                <td>116</td>
                <td>Australia</td>
                <td>January 2012</td>
                </tr>
                <tr style={tr_td}>
                <td>2</td>
                <td>103</td>
                <td>New Zealand</td>
                <td>August 2012</td>
                </tr>
                <tr style={tr_td}>
                <td>3</td>
                <td>103</td>
                <td>England</td>
                <td>December 2012</td>
                </tr>
                <tr style={tr_td}>
                <td>4</td>
                <td>107</td>
                <td>Australia</td>
                <td>February 2013</td>
                </tr>
                <tr style={tr_td}>
                <td>5</td>
                <td>119</td>
                <td>South Africa</td>
                <td>December 2013</td>
                </tr>
                <tr style={tr_td}>
                <td>6</td>
                <td>105*</td>
                <td>New Zealand</td>
                <td>February 2014</td>
                </tr>
                <tr style={tr_td}>
                <td>7</td>
                <td>115</td>
                <td>Australia</td>
                <td>December 2014</td>
                </tr>
                <tr style={tr_td}>
                <td>8</td>
                <td>141</td>
                <td>Australia</td>
                <td>December 2014</td>
                </tr>
                <tr style={tr_td}>
                <td>9</td>
                <td>169</td>
                <td>Australia</td>
                <td>December 2014</td>
                </tr>
                <tr style={tr_td}>
                <td>10</td>
                <td>147</td>
                <td>Australia</td>
                <td>January 2015</td>
                </tr>

            </table>

        </div>
        
        </>

    );
}

class Button extends Component{
    render () {
        return (

            <>
            
            <div className="button">
            
                <button>Bookmark Page</button>

            </div>
            
            </>

        );
    }
}

function Novelbox () {
    return (

        <>

            <h3>Novel Writen on Virat Kohli</h3>

            <div className="Novel-container">

                <div id="novel-card">
                    <img src="https://m.media-amazon.com/images/I/51ESKjLM0HL._AC_UY218_.jpg" alt="" />
                    <h4>Virat : Neeraj Kumar and Vidhanshu jha</h4>
                </div>

                <div id="novel-card">
                    <img src="https://m.media-amazon.com/images/I/81EHLp0JCyL._AC_UY218_.jpg" alt="" />
                    <h4>Winning Like Virat: Think and Succeed like Kohli</h4>
                </div>

                <div id="novel-card">
                    <img src="https://m.media-amazon.com/images/I/810PjjqQhGL._AC_UY218_.jpg" alt="" />
                    <h4>Virat Kohli: A new sports biography book for 2024</h4>
                </div>

                <div id="novel-card">
                    <img src="https://m.media-amazon.com/images/I/71GIxSTFJwL._AC_UY218_.jpg" alt="" />
                    <h4>Driven: The Virat Kohli Story</h4>
                </div>

                <div id="novel-card">
                    <img src="data:image/jpg;base64,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" alt="" />
                    <h4>Virat Kohli: The Run Machine of Indian Cricket</h4>
                </div>

                <div id="novel-card">
                    <img src="https://images.gr-assets.com/books/1410409513l/19545088.jpg" alt="" />
                    <h4>Virat Kohli : Reliable Rebel</h4>
                </div>

            </div>
        
        </>

    );
}

export default Image;
export {Lists,Result,Button,Novelbox};