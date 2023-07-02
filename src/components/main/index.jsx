import { useContext } from 'react';
import './style.sass';
import { format, parseISO } from 'date-fns';
import { useTemplateVal } from '@dsplay/react-template-utils';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../contexts/themeContext';

function Main() {
  const { globalTheme } = useContext(ThemeContext);

  const flightList = useTemplateVal('flightList', '');

  const { t } = useTranslation();

  return (
    <div className={`main ${globalTheme}`}>
      <header>
        <section>
          <h1>{flightList.departuresOrArrivals}</h1>
          <img src={flightList.planePicture} alt="" />
        </section>
        <section>
          <h1>{flightList.airportName}</h1>
        </section>
      </header>
      <section className="table">
        <table>
          <thead>
            <tr>
              <th>{t('destinations')}</th>
              <th>{t('flight')}</th>
              <th>{t('airline')}</th>
              <th>{t('time')}</th>
              <th>{t('gate')}</th>
              <th>{t('status')}</th>
            </tr>
          </thead>
          <tbody>
            {
              flightList.flights.map((flight, index) => {
                const tr = (index % 2 === 0) ? '' : 'line-color';

                return (
                  <tr
                    key={flight.flight + flight.airline}
                    className={tr}
                  >
                    <td>{flight.destinations}</td>
                    <td>{flight.flight}</td>
                    <td>
                      <img
                        src={flight.airline}
                        alt="Airline"
                        className="airline-img"
                      />
                    </td>
                    <td>
                      {format(parseISO(flight.departureTime), 'HH:mm a')}
                    </td>
                    <td>{flight.gate}</td>
                    <td>{flight.status}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </section>
      <footer>
        {t('update')}
        {' '}
        {format(parseISO(flightList.lastUpdate), 'HH:mm a EEEE MMM dd, yyyy')}
      </footer>
    </div>

  );
}

export default Main;
