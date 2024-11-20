import { IframeMessageProxy } from 'iframe-message-proxy';
import { consumerMensage } from './service/service'

IframeMessageProxy.listen();
window.addEventListener('message', consumerMensage)
