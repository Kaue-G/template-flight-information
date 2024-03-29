import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ptBR from 'date-fns/locale/pt-BR';
import enUS from 'date-fns/locale/en-US';
import fr from 'date-fns/locale/fr';
import es from 'date-fns/locale/es';
import de from 'date-fns/locale/de';
import nl from 'date-fns/locale/nl';
import it from 'date-fns/locale/it';

i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          locale: enUS,
          Title: 'Title',
          destination: 'Destination',
          flight: 'Flight',
          airline: 'Airline',
          time: 'Time',
          gate: 'Gate',
          status: 'Status',
          update: 'Update',
        },
      },
      pt: {
        translations: {
          locale: ptBR,
          destination: 'Destinos',
          flight: 'Voos',
          airline: 'Companhia aérea',
          time: 'Hora',
          gate: 'Portão',
          status: 'Situação',
          update: 'Atualizado',
        },
      },
      fr: {
        translations: {
          locale: fr,
          destination: 'Destination',
          flight: 'Vols',
          airline: 'Compagnie aérienne',
          time: 'Heure de départ',
          gate: 'Portail',
          status: 'Statut',
          update: 'Mise à jour',
        },
      },
      de: {
        translations: {
          locale: de,
          destination: 'Reiseziele',
          flight: 'Flüge',
          airline: 'Stunde',
          time: 'Abfahrtszeit',
          gate: 'Tor',
          status: 'Status',
          update: 'Aktualisieren',
        },
      },
      es: {
        translations: {
          locale: es,
          destination: 'Destinos',
          flight: 'Vuelos',
          airline: 'Aerolínea',
          time: 'Hora',
          gate: 'Puerta',
          status: 'Esttado',
          update: 'Actualizar',
        },
      },
      it: {
        translations: {
          locale: it,
          destination: 'Destinazioni',
          flight: 'Voli',
          airline: 'Compagnia aerea',
          time: 'orario',
          gate: 'Cancello',
          status: 'Stato',
          update: 'Aggiornamento',
        },
      },
      nl: {
        translations: {
          locale: nl,
          destination: 'Bestemmingen',
          flight: 'Vluchten',
          airline: 'Luchtvaartmaatschappij',
          time: 'tijd',
          gate: 'Hek',
          status: 'toestand',
          update: 'Bijgewerkt',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },

    react: {
      wait: true,
    },
  });

export default i18n;
