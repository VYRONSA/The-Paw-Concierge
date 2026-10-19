import Link from "next/link";

const services = [
  {title:"Overnight Pet Sitting",text:"A reassuring presence in your pet’s own home. We help keep familiar routines going, from evening settling to morning care.",image:"/images/overnight-pet-sitting.png",alt:"Golden retriever resting comfortably"},
  {title:"Dog Walking",text:"A little adventure, fresh air and movement. Walks are planned around your dog’s pace, personality and needs.",image:"/images/dog-walking.png",alt:"Happy dog outdoors"},
  {title:"Feeding Visits",text:"Reliable visits for mealtimes, fresh water and check-ins, with attention to the routines you share with us.",image:"/images/feeding-visits.png",alt:"Cat relaxing at home"},
  {title:"Companionship",text:"Company, play and gentle attention for pets who enjoy having someone there. Every visit is adapted to their temperament.",image:"/images/companionship.png",alt:"Dog receiving affection"},
];

export default function ServicesPage(){
  return <><section className="page-hero"><p className="eyebrow">Considerate care for every personality</p><h1>Our <em>services.</em></h1><p>Flexible, thoughtful care designed around your pet’s routines, comfort and individual needs.</p></section><section className="content-wrap"><div className="services-list">{services.map(s=><article className="service-detail" key={s.title}><div className="service-detail-image" role="img" aria-label={s.alt} style={{backgroundImage:`url("${s.image}")`}}/><div className="service-detail-copy"><h2>{s.title}</h2><p>{s.text}</p><Link href="/book" className="text-link">Enquire about this service ↗</Link></div></article>)}</div><p className="form-note">We’ll confirm the details and availability with you before any booking is finalised.</p><div className="center-action"><Link href="/book" className="button button-gold">Arrange a service <span>↗</span></Link></div></section></>
}
