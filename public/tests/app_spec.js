describe('LearnJS', function(){
  it('can show a problem view', function(){
    learnjs.showView('#problem-1');
    expect($('.view-container').length).toEqual(1);
  });

  it('can show another view', function(){
    learnjs.showView('#another-1');
    expect($('.view-container .another-view').length).toEqual(1);
  });

  it('shows the landing page view hen there is no hash', function(){
    learnjs.showView('');
    expect($('.view-container .landing-view').length).toEqual(1);
  });

  it('passes the hash view parameter to the view function', function(){
    spyOn(learnjs, 'problemView');
    learnjs.showView('#problem-42');
    expect(learnjs.problemView).toHaveBeenCalledWith('42');
  })

  it('invokes the router when loaded', function(){
    spyOn(learnjs, 'showView');
    learnjs.appOnReady();
    expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
  });

  it('subscribes to the hash change event', function(){
    learnjs.appOnReady();
    spyOn(learnjs, 'showView');
    $(window).trigger('hashchange');
    expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
  });

  describe('problem view', function(){
    it('has a title that include the problem number', function(){
      var view = learnjs.problemView('1');
      console.log(view);
      expect(view.find('.title').text()).toEqual('Problem #1');
    });
  });
});
