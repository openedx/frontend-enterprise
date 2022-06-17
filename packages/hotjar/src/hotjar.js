/* eslint-disable no-console */

/* Code referenced from https://github.com/olavoparno/react-use-hotjar */

export const appendHeadScript = ({
  scriptText,
  scriptId,
}) => {
  try {
    const existingScript = document.getElementById(
      scriptId,
    );

    if (existingScript) {
      console.error(`Script ${scriptId} already exists.`);
      return true;
    }

    const script = existingScript || document.createElement('script');
    script.id = scriptId;
    script.innerText = scriptText;
    script.crossOrigin = 'anonymous';

    document.head.appendChild(script);

    return true;
  } catch {
    console.error(`Failed to append script ${scriptId}.`);
    return false;
  }
};

export const createHotjarScriptText = ({
  hotjarId,
  hotjarVersion,
  hotjarDebug,
}) => `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${hotjarId},hjsv:${hotjarVersion},hjdebug:${hotjarDebug}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;

export const initializeHotjar = (
  {
    hotjarId,
    hotjarVersion,
    hotjarDebug,
    onInitialize,
  },
) => {
  const hasWindow = typeof window !== 'undefined';

  if (!hasWindow) { throw Error('Hotjar depends on window. Window is undefined.'); }

  const hotjarScriptText = createHotjarScriptText({
    hotjarId,
    hotjarVersion,
    hotjarDebug,
  });
  const isAppended = appendHeadScript({
    scriptText: hotjarScriptText,
    scriptId: 'hotjar-init-script',
  });

  if (isAppended && hasWindow && window.hj) {
    if (onInitialize) {
      onInitialize();
    }
  } else {
    throw Error('Hotjar initialization failed!');
  }
};

export const isHotjarInitialized = () => {
  const hasWindow = typeof window !== 'undefined';
  return hasWindow && window.hj;
};

export const identifyHotjar = ({
  userId,
  userInfo,
}) => {
  const initialized = isHotjarInitialized();

  if (initialized) {
    return window.hj(
      'identify',
      userId,
      userInfo,
    );
  }

  throw Error('Hotjar is not available! Is Hotjar initialized?');
};
