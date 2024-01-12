import React from 'react';
import { FormkiqHelper } from '../../components/Formkiq/FormkiqHelper';
class DesignSpecs extends React.Component<any, any> {
    formKiq: any;
    constructor(props: any) {
        super(props);
        this.state = {
            uploadedImages: [],
            specsData: {},
            uploadedImagesUrl: []
        };
        this.formKiq = new FormkiqHelper(props.meta.jsonData.formkiqClientUrl, props.meta.jsonData.formkiqUserName, props.meta.jsonData.formkiqPassword, this.successfullCallback)
    }

    componentDidMount() {
        this.setState({
            specsData: JSON.parse(JSON.stringify(this.props.data))
        });
        const { uploadedImages } = this.props.data;
        this.getUploadedImagesFromID(uploadedImages);
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
            this.setState({
                specsData: JSON.parse(JSON.stringify(this.props.data))
            });
            const { uploadedImages } = this.props.data;
            this.getUploadedImagesFromID(uploadedImages);
        }
    }

    onChangePrototypeLink = (e: any) => {
        const { specsData } = this.state;
        const { value } = e.target;
        specsData.prototypeLink = value;
        this.setState({
            specsData,
        });
    };

    onUploadFiles = (e: any) => {
        const { uploadedImages } = this.state;
        const { files } = e.target
        uploadedImages.push(files[0]);
        this.setState(uploadedImages);
    }

    handleDeleteImage = (index: number) => {
        const { uploadedImages } = this.state;
        uploadedImages.splice(index, 1);
        this.setState(uploadedImages);
    }

    handleDeleteImageUrl = (index: number) => {
        const { uploadedImagesUrl } = this.state;
        uploadedImagesUrl.splice(index, 1);
        this.setState(uploadedImagesUrl);
    }

    onClickSaveUploadedFiles = () => {
        const { uploadedImages, specsData } = this.state;
        if (uploadedImages.length > 0) {
            const data = document.getElementById('upload_document');
            this.formKiq.handleUploadForm(data);
        } else {
            this.props.onImagesUploaded(JSON.parse(JSON.stringify(specsData)));
        }
    };

    onClickClose = () => {
        this.props.onClickClose();
    };

    successfullCallback = (uploadedDocIDs: any) => {
        const { specsData } = this.state;
        const uploadedFileList = [];
        if (uploadedDocIDs && uploadedDocIDs.object && uploadedDocIDs.object.documents) {
            for (let i = 0; i < uploadedDocIDs.object.documents.length; i++) {
                let doc = uploadedDocIDs.object.documents[i];
                uploadedFileList.push(doc.documentId);
            }
        }
        specsData.uploadedImages = uploadedFileList;
        this.setState({
            specsData
        });
        this.props.onImagesUploaded(JSON.parse(JSON.stringify(specsData)));
    };

    getUploadedImagesFromID = (docIdList: any) => {
        if (docIdList && docIdList.length > 0) {
            docIdList.map((docId: any) => {
                this.getUploadedImageFromFormKiq(docId);
            });
        }
    };

    getUploadedImageFromFormKiq = (docId: any) => {
        const { uploadedImagesUrl } = this.state;
        this.formKiq.getUploadedDocument(docId, (response: any) => {
            uploadedImagesUrl.push(response.url);
            this.setState({
                uploadedImagesUrl
            });
        });
    };

    render() {
        const { editformData, uploadedImages, specsData, uploadedImagesUrl } = this.state;
        return (
            <div className="workflow-inner-data-contant">
                <div className="usecase-form">
                    <div className="heading">
                        <span>Requirement Sub-Stage details</span>
                        <button className="btn btn-close" onClick={this.onClickClose}>
                            <i className="fa fa-close"></i>
                        </button>
                    </div>
                    <div className="form">
                        <div className="form-group row">
                            <label className="col-lg-3 col-sm-12 col-form-label">Usecase Design Prototype Link</label>
                            <div className="col-lg-9 col-sm-12">
                                <input className="form-control" name="prototypeLink" value={specsData.prototypeLink}
                                    onChange={this.onChangePrototypeLink} readOnly={editformData} type="text" placeholder="" />
                            </div>

                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 col-sm-12 col-form-label">Usecase Design Screenshots</label>
                            <div className="col-lg-4 col-sm-12">
                                <form id="upload_document">
                                    <div className="upload-screenshots">
                                        <input type="file" id="file" name="specs" onChange={(e) => this.onUploadFiles(e)} readOnly={editformData} className="form-control-file" />
                                        <button className="btn btn-primary btn-upload" type="button">
                                            <i className="fa fa-plus"></i> Add more Screenshots
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 col-sm-12 text-right">
                                <button className="btn btn-primary btn-upload" type="button" onClick={this.onClickSaveUploadedFiles}>
                                    Save
                                </button>
                            </div>
                        </div>
                        <div className="form-group row">
                            {uploadedImages.length > 0 ?
                                uploadedImages.map((value: any, index: any) => (
                                    <div className="screenshot-box" key={`${index}_usecase_devlopement_specs`}>
                                        <div className="screenshot ">
                                            <img src={URL.createObjectURL(value)} alt="" />
                                        </div>
                                        <i className="fa fa-close" onClick={() => this.handleDeleteImage(index)}></i>
                                    </div>)
                                ) : <></>
                            }
                            {uploadedImagesUrl.length > 0 ?
                                uploadedImagesUrl.map((value: any, index: any) => (
                                    <div className="screenshot-box" key={`${index}_usecase_devlopement_specs`}>
                                        <div className="screenshot ">
                                            <img src={value} alt="" />
                                        </div>
                                        <i className="fa fa-close" onClick={() => this.handleDeleteImageUrl(index)}></i>
                                    </div>)
                                ) : <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DesignSpecs;