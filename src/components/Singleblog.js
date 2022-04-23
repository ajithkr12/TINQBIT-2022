import React from 'react';
import './Singleblog.style.css';
import blogImage from "../images/keyboard.jpg"
import userimage from "../images/camera.jpg"

function singleBlog() {
  return (
    <div className="single-blog">
      <div className="container">
        <div className="row">

          <div className="col-lg-10">

            <div className="blog-author">
              <div className="author-details">
                  <img src={userimage} alt="user__image" className=""/>
                  <div className="author-info">
                      <h5>Tinqbit</h5>
                      <p>Tinqbit is a cogent problem solver equipping custom build solutions employing all modern technologies.We represent a set of award winning young minds working to build up shift left trends in technologies.Tinqbit is a cogent problem solver equipping custom build solutions employing all modern technologies.We represent a set of award winning young minds working to build up shift left trends in technologies</p>
                      <small>12/01/2021 | 6 min read</small>
                  </div>
              </div>
            </div>

            <div className="blog-image">
              <img src={blogImage} alt=""/>
            </div>

            <div className="blog-title">
            <h2>What is new in 2022 Tech What is new in 2022 Tech What is new in 2022 Tech</h2> 
            </div>

            <div className="blog-description">
              <p>India, officially the Republic of India (Hindi: Bhārat Gaṇarājya),[24] is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar and Indonesia.

                  <br/>Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago.[25][26][27] Their long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human genetic diversity.[28] Settled life emerged on the subcontinent in the western margins of the Indus river basin 9,000 years ago, evolving gradually into the Indus Valley Civilisation of the third millennium BCE.[29] By 1200 BCE, an archaic form of Sanskrit, an Indo-European language, had diffused into India from the northwest,[30][31] unfolding as the language of the Rigveda, and recording the dawning of Hinduism in India.[32] The Dravidian languages of India were supplanted in the northern and western regions.[33] By 400 BCE, stratification and exclusion by caste had emerged within Hinduism,[34] and Buddhism and Jainism had arisen, proclaiming social orders unlinked to heredity.[35] Early political consolidations gave rise to the loose-knit Maurya and Gupta Empires based in the Ganges Basin.[36] Their collective era was suffused with wide-ranging creativity,[37] but also marked by the declining status of women,[38] and the incorporation of untouchability into an organised system of belief.[g][39] In South India, the Middle kingdoms exported Dravidian-languages scripts and religious cultures to the kingdoms of Southeast Asia.[40]
                  <blockquote>
                    We aim to lessen the hardship of women farmers & to eradicate inequalities & profit losses in the agricultural sector.
                  </blockquote>
                  <br/>In the early medieval era, Christianity, Islam, Judaism, and Zoroastrianism put down roots on India's southern and western coasts.[41] Muslim armies from Central Asia intermittently overran India's northern plains,[42] eventually establishing the Delhi Sultanate, and drawing northern India into the cosmopolitan networks of medieval Islam.[43] In the 15th century, the Vijayanagara Empire created a long-lasting composite Hindu culture in south India.[44] In the Punjab, Sikhism emerged, rejecting institutionalised religion.[45] The Mughal Empire, in 1526, ushered in two centuries of relative peace,[46] leaving a legacy of luminous architecture.[h][47] Gradually expanding rule of the British East India Company followed, turning India into a colonial economy, but also consolidating its sovereignty.[48] British Crown rule began in 1858. The rights promised to Indians were granted slowly,[49][50] but technological changes were introduced, and ideas of education, modernity and the public life took root.[51] A pioneering and influential nationalist movement emerged, which was noted for nonviolent resistance and became the major factor in ending British rule.[52] In 1947 the British Indian Empire was partitioned into two independent dominions, a Hindu-majority Dominion of India and a Muslim-majority Dominion of Pakistan, amid large-scale loss of life and an unprecedented migration.[53]

                  <br/>India has been a federal republic since 1950, governed in a democratic parliamentary system. It is a pluralistic, multilingual and multi-ethnic society. India's population grew from 361 million in 1951 to 1.211 billion in 2011.[54] During the same time, its nominal per capita income increased from US$64 annually to US$1,498, and its literacy rate from 16.6% to 74%. From being a comparatively destitute country in 1951,[55] India has become a fast-growing major economy and a hub for information technology services, with an expanding middle class.[56] It has a space programme which includes several planned or completed extraterrestrial missions. Indian movies, music, and spiritual teachings play an increasing role in global culture.[57] India has substantially reduced its rate of poverty, though at the cost of increasing economic inequality.[58] India is a nuclear-weapon state, which ranks high in military expenditure. It has disputes over Kashmir with its neighbours, Pakistan and China, unresolved since the mid-20th century.[59] Among the socio-economic challenges India faces are gender inequality, child malnutrition,[60] and rising levels of air pollution.[61] India's land is megadiverse, with four biodiversity hotspots.[62] Its forest cover comprises 21.7% of its area.[63] India's wildlife, which has traditionally been viewed with tolerance in India's culture,[64] is supported among these forests, and elsewhere, in protected habitats.
              </p>
            
            </div>

            <div class="after-post-tags">
              <ul class="tags">
                <li><a href="#">Smart farming</a></li>
                <li><a href="#">Growth Mindset</a></li>
                <li><a href="#">Productivity</a></li>
                <li><a href="#">Fintech</a></li>
              </ul>
			      </div>

          </div> 
        </div>
      </div>
    </div>
  );
}

export default singleBlog;
