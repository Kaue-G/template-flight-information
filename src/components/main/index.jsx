import { useContext } from 'react';
import './style.sass';
import { format, parseISO } from 'date-fns';
import { useTemplateVal } from '@dsplay/react-template-utils';
import { ThemeContext } from '../../contexts/themeContext';

function Main() {
  const { globalTheme } = useContext(ThemeContext);

  const flightList = useTemplateVal('flightList', '');

  return (
    <div className={`main ${globalTheme}`}>
      <header>
        <section>
          <h1>Departures</h1>
          <img src="" alt="" />
        </section>
        <section>
          <h1>{flightList.airportName}</h1>
        </section>
      </header>
      <section className="table">
        <table>
          <thead>
            <tr>
              <th>Destinations</th>
              <th>Flight</th>
              <th>Airline</th>
              <th>Departure Time</th>
              <th>Gate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              flightList.flights.map((flight) => (
                <tr key={flight.flight}>
                  <td>{flight.destinations}</td>
                  <td>{flight.flight}</td>
                  <td>{flight.airline}</td>
                  <td>
                    {format(parseISO(flight.departureTime), 'HH:mm a')}
                  </td>
                  <td>{flight.gate}</td>
                  <td>{flight.status}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
      <footer>
        Update 4:15 PM Tuesday May 17, 2022
      </footer>
    </div>

  );
}

export default Main;
