const getColor = (code) => {
	const defaultColor = '#92A8CD';
	const map = {
		W0001: '#2f7ed8',
		W0002: '#0d233a',
		W0003: '#8bbc21',
		W0004: '#910000',
		W0005: '#1aadce',
		A0011: '#492970',
		A0001: '#f28f43',
		A0002: '#77a1e5',
		A0003: '#c42525',
		A0004: '#a6c96a',
		A0005: '#4572A7',
		A0006: '#AA4643',
		A0007: '#89A54E',
		A0008: '#80699B',
		A0009: '#3D96AE',
		A0010: '#DB843D',
	};

	return _.get(map, code, defaultColor);
};