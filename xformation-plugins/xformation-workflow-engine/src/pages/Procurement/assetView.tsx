import * as React from 'react';

import AssetOverViewReusableComp from '../../components/AssetOverViewCommonComponent'
export class AssetView extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			useCase: {},
			usecaseList: [],
		};
	}

	setUseCaseData = (data: any) => {
		if (data && data.stepInput && data.stepInput.S && data.stepInput.S.stages && data.stepInput.S.stages.length > 0) {
			this.setState({
				useCase: data,
				usecaseList: data.stepInput.S.stages
			});
		}
	};
	

	render() {
		return (
			<div className="receive-rfq-content">
				<div className="line">
					<span className="line1" />
					<span className="line2" />
					<span className="line3" />
				</div>
				{<div className="row"><AssetOverViewReusableComp usecaseList={this.state.usecaseList}/></div>}
			</div>
		);
	}
}
