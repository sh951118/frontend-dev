/* DOM Level 2 Event 처리 : 특정 element의 Event의 Listener를 등록 하는 방식 */
// 특정 이벤트 핸들러(Listener)를 여러개 등록할 수 있다.
var TabBox = {
		init: function() {
			window.addEventListener('load', this._onWindowLoad);
		},
		_onWindowLoad: function(){
			// div : class='tab-box'
			var divTabBox = document.getElementsByClassName('tab-box')[0];
			var ulTabBox = divTabBox.childNodes[1];		//첫번째 배열은 ul전에 들어 올 수 있는 text가 된다.
			var liTabs = ulTabBox.getElementsByTagName('li');
			
			for(var i = 0; i < liTabs.length; i++){
				liTabs[i].addEventListener('click', TabBox._onTabClicked);
			}
		},
		_onTabClicked: function() {
			// unselect
		var liSelected = document.getElementsByClassName('selected');
			(liSelected.length == 1) && (liSelected[0].className = '');
			
		// select
		this.className = 'selected';
	}
}