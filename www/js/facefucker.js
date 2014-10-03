/**
 * FaceFucker class
 * 
 * @constructor
 * @returns {FaceFucker}
 */
var FaceFucker = function FaceFucker(){
    // init function FaceFucker()
    //
    this.constructor;
    
    // import tracking for facial recognition and set inital params
    //
    this.myTracker = new tracking.ObjectTracker('face');
    this.setStepSize(1.3);
    this.setScaleFactor(1.3);
};

/**
 * setStepSize
 * useful function to dynamically set the step size of the overlap image
 * @param {type} stepSize
 * @returns {undefined}
 */
FaceFucker.prototype.setStepSize = function(stepSize) {
    this.myTracker.setStepSize(stepSize);
};
   
/**
 * getStepSize
 * returns the step size of the overlap image
 * @returns {undefined}
 */
FaceFucker.prototype.getStepSize = function() {
    this.myTracker.getStepSize();
};

/**
 * setScaleFactor
 * useful function to dynamically set the scale factor for the overlap
 * image
 * @param {type} scaleFactor
 * @returns {undefined}
 */
FaceFucker.prototype.setScaleFactor = function(scaleFactor) {
    this.myTracker.setScaleFactor(scaleFactor);
};
    
/**
 * getScaleFactor
 * returns the current scale factor of the overlap image
 * @returns {FaceFucker.prototype@pro;myTracker@call;getScaleFactor}
 */
FaceFucker.prototype.getScaleFactor = function() {
    return this.myTracker.getScaleFactor();
};    

/**
 * barelyAlive
 * adds the barely alive logo to the faces found in the inputted image
 * @param {type} imgDOM
 * @returns {undefined}
 */
FaceFucker.prototype.addBarelyAlive = function(imgDOM) {
    // set constants
    //
    var BA_LOGO_URL = "/img/test/barelyalive.png";
    
    // grab parent container for image DOM
    //
    var cont = imgDOM.parentNode;
    
    // using facial recognition to find faces in the image
    //
    this.myTracker.on('track', function(event) {
        event.data.forEach(function(rect){
           window.plot(rect.x, rect.y, rect.width, rect.height);
        });
    });
    
    // set listener
    //
    tracking.track(imgDOM, this.myTracker);
    
    // insert barely alive logo on top of faces
    //
    window.plot = function(x, y, w, h) {
        // create image element to overlap original with
        //
        var rect = document.createElement('img');
        cont.appendChild(rect);
        
        // set classList and styles
        // styles insert overlaps with correct positioning
        //
        rect.classList.add('ba_rect');
        rect.style.width = w + 'px';
        rect.style.height = h + 'px';
        rect.style.left = (imgDOM.offsetLeft + x) + 'px';
        rect.style.top = (imgDOM.offsetTop + y) + 'px';
        rect.src = BA_LOGO_URL;
        
        // finally show the image DOM for user to view, now w/ barely alive
        // logo on top
        //imgDOM.style.display = 'block';
    };
};