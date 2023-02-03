export const TourInfoTemplate = `<div class="card bottom-0 left-0" id="tourInfoBox" style="width: 18rem;">
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