import React, { Component} from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";
import "./ChevimaComponent.scss";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Img_i from './m/i.jpg';
import Img_groot_1 from './m/groot/Groot-1.jpg';
import Img_groot_2 from './m/groot/Groot-2.jpg';
import Img_groot_3 from './m/groot/Groot-3.jpg';
import Img_groot_4 from './m/groot/Groot-4.jpg';
import Img_groot_5 from './m/groot/Groot-5.jpg';
import Img_groot_6 from './m/groot/Groot-6.jpg';
import Img_groot_7 from './m/groot/Groot-7.jpg';
import Img_groot_8 from './m/groot/Groot-8.jpg';
import Img_house_1 from './m/flat/flat-1.jpg';
import Img_house_2 from './m/flat/flat-2.jpg';
import Img_house_3 from './m/flat/flat-3.jpg';
import Img_dog from './m/dog.jpg';
import Img_cookie from './m/pechenka.jpg';
import Img_chear from './m/chear.jpg';
import ImgListerComponent from "../../components/image_lister/ImgListerComponent";
import {IMG_LISTER} from "../../store/AppActions";

class ChevimaComponent extends Component {
    constructor(props) {
        super(props);
        this.onClick_Link = this.onClick_Link.bind(this);
    }

    picArray = [
        {group : "groot", img : Img_groot_1, h : 2248, w : 1186},
        {group : "groot", img : Img_groot_2, h : 2248, w : 1186},
        {group : "groot", img : Img_groot_3, h : 2248, w : 1186},
        {group : "groot", img : Img_groot_4, h : 2248, w : 1186},
        {group : "groot", img : Img_groot_5, h : 2248, w : 1186},
        {group : "groot", img : Img_groot_6, h : 2248, w : 1186},
        {group : "groot", img : Img_groot_7, h : 2248, w : 1186},
        {group : "groot", img : Img_groot_8, h : 2248, w : 1186},
        {group : "house", img : Img_house_3, h : 1191, w : 1000},
        {group : "house", img : Img_house_1, h : 1191, w : 1000},
        {group : "house", img : Img_house_2, h : 1191, w : 1000},
        {group : "dog", img : Img_dog, h : 500, w : 600},
        {group : "cookies", img : Img_cookie, h : 640, w : 480},
        {group : "chair", img : Img_chear, h : 1280, w : 720},
    ]
    getDescription(group) {
        if (group === "groot") return <div className="description">
            <h2>Используемые программы</h2>
            <ul>
                <li><b>3D Max</b>
                    <ul>
                        <li>создание всех моделей в сцене</li>
                        <li>болванка для Грута</li>
                        <li>развёртка</li>
                    </ul>
                </li>
                <li><b>3D Coat</b>
                    <ul>
                        <li>модель</li>
                        <li>развёртка и доработка ретопологии Грута</li>
                        <li>текстуры всех моделей</li>
                    </ul></li>
                <li><b>Unreal Engine</b> - сборка, компиляция проекта</li>
                <li><b>Instant Meshses</b> - основа ретопологии Грута</li>
            </ul>
            <h2>Используемые технологии</h2>
            <ul>
                <li><b>Normal map</b></li>
                <li>Модификатор <b>Quad Chamfer</b></li>
                <li>Запечка света</li>
                <li>Добавление звуковых эффекты</li>
            </ul>
            <h2>Используемые материалы</h2>
            <ul>
                <li>Анимация Грута взята с <a href="https://www.mixamo.com/">mixamo</a></li>
                <li>Звуки взяты с <a href="https://wav-library.net/">wav-library</a></li>
                <li>Некоторые текстуры взяты с <a href="https://3ddd.ru/">3ddd</a>, <a href="https://junior3d.ru/">junior3d</a></li>
            </ul>
            <p>Продвинутый курс "Игровая 3D графика" школы <a href="https://knower.pro/">Knower School</a></p>
        </div>
        if (group === "house") return <div className="description">
            <h2>Используемые программы</h2>
            <ul>
                <li><b>Autocad</b> - используя чертежи, делала наброски для 3d max</li>
                <li><b>3d max</b>
                    <ul>
                        <li>моделирование здания</li>
                        <li>рабочая зона кухни</li>
                        <li>кухонный шкаф</li>
                        <li>шкаф в комнате</li>
                        <li>освещение</li>
                        <li>работа с камерами</li>
                    </ul>
                    </li>
                <li><b>Corona Render</b></li>
                <li><b>Adobe Photoshop</b> - обработка готового изображения</li>
            </ul>
            <h2>Используемые технологии</h2>
            <ul>
                <li>Дополнительные модификаторы
                    <ul>
                        <li><b>Clone</b></li>
                        <li><b>Floor Generator</b></li>
                    </ul>
                </li>
                <li>Плагин <b>MultiTexture</b></li>
                <li>Корвертация моделей в proxy</li>
            </ul>
            <h2>Используемые материалы</h2>
            <ul>
                <li>Дополнительная мебель и текстуры взяты с:
                    <ul>
                        <li><a href="https://3ddd.ru/">3ddd</a></li>
                        <li><a href="https://junior3d.ru/">junior3d</a></li>
                        <li><a href="http://www.3dklad.com/">3dklad</a></li>
                        <li><a href="https://www.turbosquid.com/">turbosquid</a></li>
                        <li><a href="https://dimensiva.com/">dimensiva</a></li>
                        <li><a href="https://www.bentanji.com/">bentanji</a></li>
                        <li><a href="http://coronamaterials.com/">coronamaterials</a></li>
                    </ul>
                </li>
            </ul>
            <p>Архитектурный курс школы <a href="https://knower.pro/">Knower School</a></p>
        </div>
        if (group === "dog") return <div className="description">
            <h2>Используемые программы</h2>
            <ul>
                <li><b>3d max</b> - работа над правильной сеткой</li>
                <li><b>Corona Render</b></li>
            </ul>
            <h2>Используемые технологии</h2>
            <ul>
                <li>Основные модификаторы
                    <ul>
                        <li><b>Edit Poly</b></li>
                        <li><b>TurboSmooth</b></li>
                        <li><b>Symmetry</b></li>
                    </ul>
                </li>
                <li>Использование <b>Tips</b> для правильной сетки</li>
            </ul>
            <p>Базовый курс школы <a href="https://knower.pro/">Knower School</a></p>
        </div>
        if (group === "cookies") return <div className="description">
            <h2>Используемые программы</h2>
            <ul>
                <li><b>3d max</b></li>
            </ul>
            <h2>Используемые технологии</h2>
            <ul>
                <li>Основные модификаторы
                    <ul>
                        <li><b>Edit Poly</b></li>
                        <li><b>TurboSmooth</b></li>
                        <li><b>Twist</b></li>
                        <li><b>Bend</b></li>
                    </ul>
                </li>
            </ul>
            <p>Вводный урок школы <a href="https://knower.pro/">Knower School</a></p>
        </div>
        if (group === "chair") return <div className="description">
            <h2>Используемые программы</h2>
            <ul>
                <li><b>3d max</b></li>
            </ul>
            <h2>Используемые технологии</h2>
            <ul>
                <li>Основные модификаторы
                    <ul>
                        <li><b>Edit Poly</b></li>
                        <li><b>TurboSmooth</b></li>
                        <li><b>Symmetry</b></li>
                        <li><b>FFD 4x4x4</b></li>
                    </ul>
                </li>
            </ul>
            <p>Урок взят с youtube</p>
        </div>
    }

    onClick_Link(val) {
        let current = this.picArray[val.target.id];

        let imagesObj = this.picArray.filter(e => e.group === current.group);
        let images = [...new Set(imagesObj.map(e => e.img))]

        this.props.setImages(images);
        this.props.setCursor(images.indexOf(current.img));
        this.props.setShow(true);
    }

    projects() {
        let groups = [...new Set(this.picArray.map(e => e.group))];

        return <div className="about">
            {groups.map((currentGroup, groupNum) => {
                let groupArray = this.picArray.filter(z => z.group === currentGroup);

                return <Accordion key={groupNum}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h4" gutterBottom>
                            {currentGroup.charAt(0).toUpperCase() + currentGroup.slice(1)}
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <div className="images">
                            {groupArray.map(
                                (el, i) => <div
                                    className="image"
                                    onClick={this.onClick_Link}
                                    key={i}
                                    id={this.picArray.indexOf(el)}>
                                    <img src={el.img} alt="" />
                                </div>
                            )}
                        </div>
                        {this.getDescription(currentGroup)}
                    </AccordionDetails>
                </Accordion>
            })}
        </div>
    }

    render() {
        return <div className="chevima">
            <div className="title">
                <div className="my-foto">
                    <img src={Img_i} alt="qwe" width="100%" height="100%"/>
                </div>
                <div className="my-info">
                    <div className="my-fio"><span>Чевардина Мария Викторовна</span></div>
                    <div className="my-birthsday"><span>Дата рождения: 21.10.1994</span></div>
                    <div className="my-prof"><span>3d моделлер</span></div>
                </div>
            </div>
            <div className="my-project-title"><span>Портфолио</span></div>
            {this.projects()}
            <ImgListerComponent/>
        </div>
    }
}
const mapStateToProps = (state) => {
    return {
        images : state.imgLister_Images
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setShow : (newValue) => dispatch({ type: IMG_LISTER.SHOW, newValue: newValue }),
        setCursor : (newValue) => dispatch({ type: IMG_LISTER.CURSOR, newValue: newValue }),
        setImages : (newValue) => dispatch({ type: IMG_LISTER.IMAGES, newValue: newValue }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChevimaComponent));