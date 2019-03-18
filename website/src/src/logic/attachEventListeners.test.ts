import attachEventListeners from './attachEventListeners';

describe('attachEventListeners', () => {
  it('should return undefined when filed not found', () => {
    expect(
      attachEventListeners({
        mode: 'onchange',
        allFields: {},
        radioOptionIndex: 0,
        ref: {},
        type: 'radio',
        name: 'test',
        watchFields: {},
        validateWithStateUpdate: () => {},
      }),
    ).toBeUndefined();
  });

  it('should return undefined', () => {
    const validateWithStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const allFields = {
      test: {
        ref: {},
        options: [
          {
            ref: {
              addEventListener,
            },
            eventAttached: false,
          },
        ],
      },
    };

    expect(
      attachEventListeners({
        watchFields: {},
        mode: 'onChange',
        allFields,
        radioOptionIndex: 0,
        ref: {
          name: 'test',
        },
        type: 'radio',
        name: 'test',
        validateWithStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).toBeCalledWith('change', validateWithStateUpdate);
    expect(allFields.test.options[0].eventAttached).toBeTruthy();
  });

  it('should attach on change event on radio type input when it is watched', () => {
    const validateWithStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const allFields = {
      test: {
        ref: {},
        watch: true,
        options: [
          {
            ref: {
              addEventListener,
            },
            eventAttached: false,
          },
        ],
      },
    };

    expect(
      attachEventListeners({
        watchFields: {
          test: true,
        },
        mode: 'onSubmit',
        allFields,
        radioOptionIndex: 0,
        ref: {
          name: 'test',
        },
        type: 'radio',
        name: 'test',
        validateWithStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).toBeCalledWith('change', validateWithStateUpdate);
    expect(allFields.test.options[0].eventAttached).toBeTruthy();
  });

  it('should attach input event on none radio type input', () => {
    const validateWithStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const allFields = {
      test: {
        ref: {
          addEventListener,
        },
        eventAttached: false,
      },
    };

    expect(
      attachEventListeners({
        watchFields: {},
        mode: 'onChange',
        allFields,
        radioOptionIndex: 0,
        ref: {
          name: 'test',
          addEventListener,
        },
        type: 'text',
        name: 'test',
        validateWithStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).toBeCalledWith('input', validateWithStateUpdate);
    expect(allFields.test.eventAttached).toBeTruthy();
  });

  it('should attach input event on none radio type input when it is watched', () => {
    const validateWithStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const allFields = {
      test: {
        ref: {
          addEventListener,
        },
        eventAttached: false,
        watch: true,
      },
    };

    expect(
      attachEventListeners({
        watchFields: {
          test: true,
        },
        mode: 'onSubmit',
        allFields,
        radioOptionIndex: 0,
        ref: {
          name: 'test',
          addEventListener,
        },
        type: 'text',
        name: 'test',
        validateWithStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).toBeCalledWith('input', validateWithStateUpdate);
    expect(allFields.test.eventAttached).toBeTruthy();
  });

  it('should attach on blur event on radio type input', () => {
    const validateWithStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const allFields = {
      test: {
        ref: {},
        options: [
          {
            ref: {
              addEventListener,
            },
            eventAttached: false,
          },
        ],
      },
    };

    expect(
      attachEventListeners({
        watchFields: {},
        mode: 'onBlur',
        allFields,
        radioOptionIndex: 0,
        ref: {
          name: 'test',
        },
        type: 'radio',
        name: 'test',
        validateWithStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).toBeCalledWith('blur', validateWithStateUpdate);
    expect(allFields.test.options[0].eventAttached).toBeTruthy();
  });

  it('should attach input event on none radio type input', () => {
    const validateWithStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const allFields = {
      test: {
        ref: {
          addEventListener,
        },
        eventAttached: false,
      },
    };

    expect(
      attachEventListeners({
        watchFields: {},
        mode: 'onBlur',
        allFields,
        radioOptionIndex: 0,
        ref: {
          name: 'test',
          addEventListener,
        },
        type: 'text',
        name: 'test',
        validateWithStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).toBeCalledWith('blur', validateWithStateUpdate);
    expect(allFields.test.eventAttached).toBeTruthy();
  });
});
