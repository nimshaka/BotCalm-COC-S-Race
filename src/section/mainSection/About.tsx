import MarqueeCard from "@/components/MarqueeCard";
import Tree3 from "../../assets/images/Tree2.png";
import "swiper/css";
import CardSlider from "@/components/CardSlider";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-[#1D2801] via-[#324503] to-[#1D2801] mx-auto  flex-col max-w-[1920px]   md:h-auto  ">
      <div className="flex flex-col items-center justify-center w-full mt-0 -translate-y-32 md:flex-row md:-translate-y-0 max-w-[1920px]">
        {/* About */}
        <div className="2xl:w-[1198px] 2xl:h-[388px] xl:w-[800px] xl:h-[360px] lg:w-[730px] lg:h-[300px] md:w-[620px] md:h-[250px] bg-[#151D00] flex w-[358px] h-[468px] rounded-3xl text-center text-white font-CaesarDressingRegular ">
          <div className="2xl:w-[673px] 2xl:h-[309px] xl:w-[600px] xl:h-[320px] lg:w-[550px] lg:h-[260px] md:w-[500px] md:h-[240px] mx-auto text-center p-[37px] lg:p-[20px] md:p-[8px]">
            <h2 className="mb-4 2xl:text-[74px] xl:text-[60px] lg:text-[50px] md:text-[45px] text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000] text-[40px]">
              ABOUT{" "}
              <span className="text-lime-400 drop-shadow-[4px_4px_0px_#000000]">
                COQ
              </span>
            </h2>
            <p className="mb-6 2xl:text-[16px] xl:text-[14px] lg:text-[13px] md:text-[12px] text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000]">
              COQ Coin finds itself at the center of a whirlwind of controversy.
              In a shocking turn of events, Floki, the charming and playful
              Viking-themed meme coin, is wrongfully accused of being behind a
              devastating bomb blast. The headlines scream of conspiracy, as
              authorities hastily point fingers, and Floki's reputation hangs by
              a thread.
            </p>
            <button className="text-[#FDF4DC] transition-colors bg-[#EB2D26] border-[#151D00] rounded-full h-[57px] w-[190px] xl:h-[62px] xl:w-[200px] lg:h-[60px] lg:w-[195px] md:h-[58px] md:w-[190px] font-CaesarDressingRegular text-[20px] border-4 2xl:h-[67px] 2xl:w-[207px]">
              BUY
            </button>
          </div>
        </div>
        {/* About */}
        {/* Tree */}
        <div className="">
          <div className="flex items-center justify-center translate-x-32 -translate-y-32 2xl:-translate-x-32 2xl:translate-y-0 md:-translate-x-20 md:-translate-y-1 lg:-translate-x-24 lg:translate-y-0 xl:-translate-x-28 xl:-translate-y-1">
            <img
              src={Tree3}
              alt="Tree"
              className="2xl:w-[223px] 2xl:h-[427px] xl:w-[190px] xl:h-[370px] lg:w-[160px] lg:h-[320px] md:w-[140px] md:h-[260px] w-[114.36px] h-[207px]"
            />
          </div>
        </div>
        {/* Tree */}
      </div>
      <div className=" -translate-y-52 md:-translate-y-0">
        <MarqueeCard></MarqueeCard>
      </div>

      {/* Coc section */}
      <div className="flex flex-col -translate-y-40  md:-translate-y-0 md:mt-[100px] items-center md:items-start ">
        {/* Text */}
        <div className="flex  md:ml-[100px] font-CaesarDressingRegular ">
          <h2 className="2xl:text-[64px] xl:text-[60px] lg:text-[50px] md:text-[45px] text-[#FDF4DC] drop-shadow-[4px_4px_0px_#000000] text-[40px]">
            Creater your own{" "}
            <span className="ml-2 text-[#B5FF07] drop-shadow-[4px_4px_0px_#000000]">
              COQ
            </span>
          </h2>
        </div>
        {/* Text */}

        {/* Coc section */}
        <div className="2xl:w-[1718px] flex border items-start justify-start md:ml-[100px]">
          {/* <CardSlider /> */}{" "}
          <div className="">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?" 1914 translation by H. Rackham "But I must explain to you
            how all this mistaken idea of denouncing pleasure and praising pain
            was born and I will give you a complete account of the system, and
            expound the actual teachings of the great explorer of the truth, the
            master-builder of human happiness. No one rejects, dislikes, or
            avoids pleasure itself, because it is pleasure, but because those
            who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone
            who loves or pursues or desires to obtain pain of itself, because it
            is pain, but because occasionally circumstances occur in which toil
            and pain can procure him some great pleasure. To take a trivial
            example, which of us ever undertakes laborious physical exercise,
            except to obtain some advantage from it? But who has any right to
            find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no
            resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et
            Malorum", written by Cicero in 45 BC "At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat."
          </div>
        </div>
        {/* Coc section */}
      </div>
      <div className="-translate-y-40 md:-translate-y-0">
        <MarqueeCard />
      </div>
    </div>
  );
}
