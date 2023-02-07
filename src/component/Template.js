const TourInfoTemplate = `<div class="card bottom-0 left-0" id="tourInfoBox" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{title}}</h5>
                    <p class="card-text">{{description}}</p>
                    <div class="d-flex justify-content-between">
                        <tour-button role="previous" class="btn btn-outline-warning btn-sm tourPreviousSlideBtn"
                                     id="previousSlideBtn">Previous
                        </tour-button>
                        <div>
                            <span id="currentSlideIndex">{{currentIndex}}</span>
                            <span>/</span>
                            <span id="tourTotalSlideCount">{{totalSlide}}</span>
                        </div>

                        <tour-button role="next" class="btn btn-outline-primary btn-sm tourNextSlideBtn"
                                     id="nextSlideBtn">Next
                        </tour-button>
                    </div>

                </div>
                <div class="card-footer text-muted">
                    <div class="d-flex justify-content-between">
                        <tour-button role="cancel" class="btn  btn-outline-warning btn-sm tourCancelBtn"
                                     id="tourCancelBtn">Cancel
                        </tour-button>
                        <tour-button role="complete" class="btn btn-outline-primary btn-sm tourCompleteBtn"
                                     id="tourCompleteBtn">
                            Complete
                        </tour-button>
                    </div>
                </div>
            </div>`

const TourSlideTemplate = `
<style>
    .tourSlideElement{
        width: max-content;
  position: absolute;
  z-index: 999;

  background: #eeeeee;
  color: #555555;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  font-size: 90%;
    }
    #arrow-{{id}}{
  position: absolute;
  background: #999999;
  width: 8px;
  height: 8px;
  z-index: 900;
  transform: rotate(45deg);
}
.tourSlideElement header {
border-bottom:1px solid #dddddd;
padding:5px;
}
</style>
<div class="tourSlideElement" role="tooltip">
                            <div id="arrow-{{id}}"></div>

                            <header>
                                <h5>{{title}}</h5>
                            </header>
                            <p>{{content}}</p>
                            <div class="d-flex justify-content-between">
                                 <tour-button role="previous"  class="btn btn-outline-primary tourPreviousSlideBtn" >Previous</tour-button>
                                 <tour-button role="next"  class="btn btn-outline-primary tourNextSlideBtn" >Next</tour-button>
                            </div>
                        </div>`

export {TourInfoTemplate, TourSlideTemplate}