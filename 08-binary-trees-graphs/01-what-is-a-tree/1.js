class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Subscribe to an event
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this; // for chaining
  }

  // Alias for on()
  addListener(event, listener) {
    return this.on(event, listener);
  }

  // Remove a specific listener
  off(event, listener) {
    if (!this.events[event]) return this;
    
    this.events[event] = this.events[event].filter(l => l !== listener);
    return this;
  }

  // Alias for off()
  removeListener(event, listener) {
    return this.off(event, listener);
  }

  // Subscribe to an event for one-time only
  once(event, listener) {
    const onceWrapper = (...args) => {
      listener(...args);
      this.off(event, onceWrapper);
    };
    return this.on(event, onceWrapper);
  }

  // Emit an event
  emit(event, ...args) {
    if (!this.events[event]) return false;
    
    this.events[event].forEach(listener => {
      listener(...args);
    });
    return true;
  }

  // Remove all listeners for an event or all events
  removeAllListeners(event) {
    if (event) {
      delete this.events[event];
    } else {
      this.events = {};
    }
    return this;
  }

  // Get all listeners for an event
  listeners(event) {
    return this.events[event] || [];
  }

  // Get listener count for an event
  listenerCount(event) {
    return this.listeners(event).length;
  }
}