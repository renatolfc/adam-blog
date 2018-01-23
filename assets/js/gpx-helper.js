function display_gpx(elt, mapid, url) {
    elt = document.getElementById(elt);

	if (!elt) return;
	if (!url || !mapid) return;

	function _t(t) { return elt.getElementsByTagName(t)[0]; }
	function _c(c) { return elt.getElementsByClassName(c)[0]; }

	var map = L.map(mapid);
    // create the tile layer with correct attribution:
    L.tileLayer('https://api.mapbox.com/styles/v1/renatoc/cjcqugn135fs42roa36v72r6d/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmVuYXRvYyIsImEiOiJjamNxdGd4amcwMXp2MzFub291c2JlczloIn0.LsxqiBEahOR-b58Kexowag',
    {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(map);

	new L.GPX(url, {
			async: true,
			marker_options: {
				startIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-start.png',
				endIconUrl:   'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-end.png',
				shadowUrl:    'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-shadow.png'
			}
	}).on('loaded', function(e) {
	var gpx = e.target;
	map.fitBounds(gpx.getBounds());

	/*
	 * Note: the code below relies on the fact that the demo GPX file is
	 * an actual GPS track with timing and heartrate information.
	 */
	_t('h3').textContent = gpx.get_name();
	_c('start').textContent = gpx.get_start_time().toDateString() + ', ' +
		gpx.get_start_time().toLocaleTimeString();
	_c('distance').textContent = gpx.get_distance().toFixed(2);
	_c('duration').textContent = gpx.get_duration_string(gpx.get_moving_time());
	_c('pace').textContent     = gpx.get_duration_string(gpx.get_moving_pace(), true);
    _c('speed').textContent    = gpx.get_duration_string(gpx.get_moving_speed());
	}).addTo(map);
}
