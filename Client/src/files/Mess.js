import './MessStyle.css';
function Mess(){
    return(
        <>
        <div  className='page'>
      <header>
        <div className="menu-bar">
          <div>
          <h1 className='menu'>WEEKLY MENU AND MESS TIMINGS</h1></div>
        </div>
      </header>
      <div className='pattern'>
        <table width="1050" className='tables'> 
          <thead>
            <tr className='head'>
              <th width="240">Day</th>
              <th width="340">Breakfast<br/>8:00 AM to 10:00 AM</th>
              <th width="450">Lunch<br/>12:30 PM to 2:30 PM</th>
              <th width="450">Dinner<br/>8:00 PM to 10:00 PM</th>
            </tr>
          </thead>
          <tbody>
            <tr className='row-data1'>
              <td align='center' className='abc'><font size="13">Monday</font></td>
              <td>
                <ul className="list-items" type="none">
                  <li>Paratha</li>
                  <li>Aalo chana</li>
                  <li>Corflakes</li>
                  <li>Milk</li>
                  <li>Tea</li>
                  <li>Banana</li>
                </ul>
                <ul className="extra-items" type="none">
            <ul type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Boiled Egg -> ₹7.5</li>
                  <li>Omlette -> ₹16</li></ul>
            </ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                  <li>Yellow dal</li>
                  <li>Rice</li>
                  <li>Roti</li>
                  <li>Sabji</li>
                  <li>Raita</li>
                  <li>Seasonal Fruit</li>
                </ul>
                <ul className="extra-items" type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Curd -> ₹10</li></ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                  <li>Dal</li>
                  <li>Rice</li>
                  <li>Roti</li>
                  <li>Sabji</li>
                  <li>Sewai</li>
                </ul>
                <ul className="extra-items" type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Egg Curry -> ₹15</li></ul>
              </td>
            </tr>
          </tbody>
          <tbody>
          <tr className='row-data2'>
          <td align='center'className='abc'><font size="13">Tuesday</font></td>
              <td>
                <ul className="list-items" type="none">
                <li>Poha</li>
            <li>Sweet Daliya</li>
            <li>Bread Butter/Jam</li>
            <li>Tea</li>
            <li>Banana</li>
                </ul>
                <ul className="extra-items" type="none">
            <ul type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Boiled Egg -> ₹7.5</li>
                  <li>Omlette -> ₹16</li>
                  <li>Milk -> ₹12</li></ul>
            </ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                  <li>Yellow dal</li>
                  <li>Rice</li>
                  <li>Roti</li>
                  <li>Sabji</li>
                  <li>Raita</li>
                  <li>Seasonal Fruit</li>
                </ul>
                <ul className="extra-items" type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Curd -> ₹10</li></ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                  <li>Dal</li>
                  <li>Rice</li>
                  <li>Roti</li>
                  <li>Sabji</li>
                  <li>Sewai</li>
                </ul>
                
              </td>
            </tr>
          </tbody>
          <tbody>
          <tr className='row-data3'>
          <td align='center'className='abc'><font size="13">Wednesday</font></td>
              <td>
                <ul className="list-items" type="none">
                <li>Idli Sambhar</li>
            <li>Cocunut Chutney</li>
            <li>Bread Butter/Jam</li>
            <li>Tea</li>
            <li>Banana</li>
                </ul>
                <ul className="extra-items" type="none">
            <ul type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Boiled Egg -> ₹7.5</li>
                  <li>Omlette -> ₹16</li></ul>
            </ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                <li>Yellow Dal</li>
              <li>Rice</li>
              <li>Roti</li>
              <li>Mix Veg</li>
              <li>Bhujia</li>
              <li>Raita</li>
              <li>Seasonal Fruit</li>
                </ul>
                <ul className="extra-items" type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Curd -> ₹10</li></ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                <li>Jeera Rice</li>
              <li>Poori</li>
              <li>Mutter Paneer</li>
              <li>Raita</li>
                </ul>
                <ul className="extra-items" type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Chicken Masaala -> ₹21</li></ul>
              </td>
            </tr>
          </tbody>
          <tbody>
          <tr className='row-data4'>
          <td align='center'className='abc'><font size="13">Thursday</font></td>
              <td>
                <ul className="list-items" type="none">
                <li>Aalo Paratha</li>
            <li>Plain Curd</li>
            <li>Bread Butter/Jam</li>
            <li>Tea</li>
            <li>Banana</li>
                </ul>
                <ul className="extra-items" type="none">
            <ul type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Boiled Egg -> ₹7.5</li>
                  <li>Omlette -> ₹16</li></ul>
            </ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                <li>Chana Dal</li>
              <li>Rice</li>
              <li>Roti</li>
              <li>Sabji</li>
              <li>Onion Pakoda</li>
              <li>Salad</li>
              <li>Seasonal Fruit</li>
                </ul>
                <ul className="extra-items" type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Curd -> ₹10</li></ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                <li>Dal(Sabut)</li>
              <li>Rice</li>
              <li>Roti</li>
              <li>Sabji</li>
              <li>Kheer</li>
                </ul>
              </td>
            </tr>
          </tbody>
          <tbody>
          <tr className='row-data5'>
          <td align='center'className='abc'><font size="13">Friday</font></td>
              <td>
                <ul className="list-items" type="none">
                <li>Puri</li>
            <li>Plain Curd</li>
            <li>Bread Butter/Jam</li>
            <li>Tea</li>
            <li>Banana</li>
                </ul>
                <ul className="extra-items" type="none">
            <ul type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Boiled Egg -> ₹7.5</li>
                  <li>Omlette -> ₹16</li></ul>
            </ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                <li>Yellow Dal</li>
              <li>Rice</li>
              <li>Roti</li>
              <li>Sabji</li>
              <li>Bhujia</li>
              <li>Raita</li>
              <li>Seasonal Fruit</li>
                </ul>
                <ul className="extra-items" type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Curd -> ₹10</li></ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                <li>Dal(Tadka)</li>
              <li>Rice</li>
              <li>Roti</li>
              <li>Kadhai Paneer</li>
                </ul>
                <ul className="extra-items" type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Fish Curry -> ₹21</li></ul>
              </td>
            </tr>
          </tbody>
          <tbody>
          <tr className='row-data6'>
          <td align='center'className='abc'><font size="13">Saturday</font></td>
              <td>
                <ul className="list-items" type="none">
                <li>Chula Bhatura</li>
            <li>Corn Flakes</li>
            <li>Milk</li>
            <li>Tea</li>
            <li>Banana</li>
                </ul>
                <ul className="extra-items" type="none">
            <ul type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Boiled Egg -> ₹7.5</li>
                  <li>Omlette -> ₹16</li></ul>
            </ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                <li>Yellow Dal</li>
              <li>Rice</li>
              <li>Roti</li>
              <li>Kofta</li>
              <li>Bhujia</li>
              <li>Papad</li>
              <li>Salad</li>
              <li>Seasonal Fruit</li>
                </ul>
                <ul className="extra-items" type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Curd -> ₹10</li></ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                <li>Dal(Sabut)</li>
              <li>Veg Pulao</li>
              <li>Roti</li>
              <li>Shahi Panerer</li>
                </ul>
              </td>
            </tr>
          </tbody>
          <tbody>
          <tr className='row-data7'>
          <td align='center'className='abc'><font size="13">Sunday</font></td>
              <td>
                <ul className="list-items" type="none">
                <li>Masala Dosa/Uttapam</li>
            <li>Sambhar</li>
            <li>Cocunut Chutney</li>
            <li>Tea</li>
            <li>Banana</li>
                </ul>
                <ul className="extra-items" type="none">
            <ul type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Boiled Egg -> ₹7.5</li>
                  <li>Omlette -> ₹16</li></ul>
            </ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                <li>Raita</li>
              <li>Rice</li>
              <li>Poori</li>
              <li>Panner Butter Masala</li>
              <li>Seasonal Fruit</li>
                </ul>
                <ul className="extra-items" type="none">
            <li className='extra'><b><i>Extra</i></b></li>
            <li>Chicken Masaala -> ₹21</li></ul>
              </td>
              <td>
                <ul className="list-items" type="none">
                <li>Veg Biryani</li>
                <li>Roti</li>
                <li>Veg Manchurian</li>
                <li>Ice-Cream</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </>
      
    )
}
export default Mess;
