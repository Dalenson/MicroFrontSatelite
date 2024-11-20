const FRAGMENT_EVENT_PREFIX = "customMessage:";

const handleOnReceiveMessage = (msgEvt) => {
    return Object.keys(msgEvt)
      .find(k => k == 'action' && msgEvt.action.startsWith(FRAGMENT_EVENT_PREFIX));
}

export const consumerMensage = (fragmentEvent) => {    
        if (!fragmentEvent.data || !fragmentEvent.data.message || !handleOnReceiveMessage(fragmentEvent.data.message)) {
            return;
        }
      
        const { message, trackingProperties } = fragmentEvent.data;
        const payload = {
            message,
            trackingProperties,
            source: fragmentEvent.source
        }
      
        switch (message.action) {
            case `${FRAGMENT_EVENT_PREFIX}getDados`:
                getUsers(payload);
                break;
        }
}

function getUsers({source, trackingProperties}) {
    const messageResponse = {
        response: {
            name: 'Consulta retornada de satélite',
            website: 'satelite.me',
        },
        trackingProperties,
    };
    source.postMessage(messageResponse, '*');
}