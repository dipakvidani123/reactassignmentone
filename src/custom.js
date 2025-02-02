import "./custom.css"

import { Component } from "react";

var Table={
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
   
}

var table={
    border:"1px solid black",
    backgroundColor:'black'
}

var tr_td={
    border:"1px solid white",
    color:"yellow"
}
   
var th={
    border:"1px solid grey",
    color:"light cyan"
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


        <div className="Table" style={Table}>

        <h3>Recent Text Centuries</h3>
        
            <table style={table}>

                <tr style={tr_td}>
                    <th style={th}>NO.</th>
                    <th style={th}>RUNS.</th>
                    <th style={th}>AGAINST.</th>
                    <th style={th}>Date.</th>
                </tr>

                <tr style={tr_td}>
                    <td style={tr_td}>1</td>
                    <td style={tr_td}>116</td>
                    <td style={tr_td}> Australia</td>
                    <td style={tr_td}>24 January 2012</td>
                </tr>

                <tr style={tr_td}>
                    <td style={tr_td}>2</td>
                    <td style={tr_td}>103</td>
                    <td style={tr_td}>  New Zealand</td>
                    <td style={tr_td}>31 August 2012</td>
                </tr>

                <tr style={tr_td}>
                    <td style={tr_td}>3</td>
                    <td style={tr_td}>103</td>
                    <td style={tr_td}> Australia</td>
                    <td style={tr_td}>3 December 2012</td>
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
                    <h4>Virat [Paperback] Jha, Neeraj and Kumar, Vidhanshu</h4>
                </div>

                <div id="novel-card">
                    <img src="https://m.media-amazon.com/images/I/81EHLp0JCyL._AC_UY218_.jpg" alt="" />
                    <h4>Winning Like Virat: Think and Succeed like Kohli</h4>
                </div>

                <div id="novel-card">
                    <img src="https://m.media-amazon.com/images/I/51ESKjLM0HL._AC_UY218_.jpg" alt="" />
                    <h4>Virat [Paperback] Jha, Neeraj and Kumar, Vidhanshu</h4>
                </div>

                <div id="novel-card">
                    <img src="https://m.media-amazon.com/images/I/51ESKjLM0HL._AC_UY218_.jpg" alt="" />
                    <h4>Virat [Paperback] Jha, Neeraj and Kumar, Vidhanshu</h4>
                </div>

                <div id="novel-card">
                    <img src="https://m.media-amazon.com/images/I/81EHLp0JCyL._AC_UY218_.jpg" alt="" />
                    <h4>Winning Like Virat: Think and Succeed like Kohli</h4>
                </div>

                <div id="novel-card">
                    <img src="https://m.media-amazon.com/images/I/51ESKjLM0HL._AC_UY218_.jpg" alt="" />
                    <h4>Virat [Paperback] Jha, Neeraj and Kumar, Vidhanshu</h4>
                </div>

            </div>
        
        </>

    );
}

export default Image;
export {Lists,Result,Button,Novelbox};