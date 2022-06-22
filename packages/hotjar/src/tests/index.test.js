/* eslint-disable no-console */

import {
  appendHeadScript, identifyHotjar, initializeHotjar,
} from '../index';

describe('appendHeadScript', () => {
  const scriptId = 'hotjar-init-script';
  const scriptText = "console.log('Hello World!')";

  const appendSpy = jest.spyOn(document.head, 'appendChild');
  const createElementSpy = jest.spyOn(document, 'createElement');
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  afterEach(() => {
    try {
      document.getElementById(scriptId).remove();
    } catch {
      // do nothing
    }
    jest.clearAllMocks();
  });

  it('should append script to the document', () => {
    const script = document.createElement('script');
    createElementSpy.mockReturnValueOnce(script);

    const result = appendHeadScript({
      scriptText,
      scriptId,
    });

    expect(appendSpy).toHaveBeenCalledWith(script);
    expect(script.innerText).toBe(scriptText);
    expect(script.id).toBe(scriptId);
    expect(result).toBe(true);
  });

  it('should not append script if it already exists', () => {
    const result1 = appendHeadScript({
      scriptText,
      scriptId,
    });

    const result2 = appendHeadScript({
      scriptText,
      scriptId,
    });

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(appendSpy).toHaveBeenCalledTimes(1);
    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  it('returns false if an error occurs', () => {
    createElementSpy.mockImplementationOnce(() => { throw new Error(); });

    const result = appendHeadScript({
      scriptText,
      scriptId,
    });

    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledWith(`Failed to append script ${scriptId}.`);
  });
});

describe('initializeHotjar', () => {
  const hotjarId = 1;
  const hotjarVersion = 1;
  const hotjarDebug = true;

  const windowSpy = jest.spyOn(window, 'window', 'get');

  afterEach(() => {
    try {
      document.getElementById('hotjar-init-script').remove();
    } catch {
      // do nothing
    }
    jest.clearAllMocks();
  });

  it('should append hotjar script, call onInitialize and return true', () => {
    windowSpy.mockImplementation(() => ({
      hj: jest.fn(),
    }));

    const mockHandleInitialize = jest.fn();
    initializeHotjar({
      hotjarId,
      hotjarVersion,
      hotjarDebug,
      onInitialize: mockHandleInitialize,
    });

    expect(mockHandleInitialize).toHaveBeenCalled();
  });

  it('should throw error if initialization failed', () => {
    windowSpy.mockImplementation(() => ({
      hj: undefined,
    }));

    expect(() => initializeHotjar({
      hotjarId,
      hotjarVersion,
      hotjarDebug,
    })).toThrowError();
  });
});

describe('identifyHotjar', () => {
  const userId = 1;
  const userInfo = {};

  const windowSpy = jest.spyOn(window, 'window', 'get');

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call identify on window.hj', () => {
    const mockHotjar = jest.fn();

    windowSpy.mockImplementation(() => ({
      hj: mockHotjar,
    }));

    identifyHotjar({
      userId,
      userInfo,
    });

    expect(mockHotjar).toHaveBeenCalledWith('identify', userId, userInfo);
  });

  it('should throw error if hotjar is not initialized', () => {
    windowSpy.mockImplementation(() => ({
      hj: undefined,
    }));

    expect(() => identifyHotjar({
      userId,
      userInfo,
    })).toThrowError();
  });
});
