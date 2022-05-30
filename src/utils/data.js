import img from "../../src/assets/images/4.jpg";
import img1 from "../../src/assets/images/1.jpg";
import img3 from "../../src/assets/images/3.jpg";
import img2 from "../../src/assets/images/2.jpg";

const data = [
  {
    id: 1,
    img: img,
    tag: "Business",
    head: "Business Administration",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
    path: `/courses/business`
  },
  {
    id: 2,
    img: img1,
    tag: "Engineering",
    head: "Computer Science",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
    path: `/courses/business`
  },
  {
    id: 3,
    img: img2,
    tag: "Social",
    head: "Swasa",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
    path: `/courses/business`
  },
  {
    id: 4,
    img: img3,
    tag: "Business",
    head: "Accounting and Finance",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
    path: `/courses/business`
  },
  {
    id: 5,
    img: img1,
    tag: "Engineering",
    head: "Civil Engineering",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
    path: `/courses/business`
  },
  {
    id: 6,
    img: img3,
    tag: "Business",
    head: "Procurement and Logistics",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
    path: `/courses/business`
  },
  {
    id: 7,
    img: img2,
    tag: "Business",
    head: "Hospitality Programs",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
    path: `/courses/business`
  },
  {
    id: 8,
    img: img,
    tag: "Engineering",
    head: "Petroleum Engineering",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
    path: `/courses/business`
  },
  {
    id: 9,
    img: img3,
    tag: "Business",
    head: "Marketing",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
    path: `/courses/business`
  },
];

const latestCourses = [
  {
    id: 10,
    img: img1,
    tag: "Engineering",
    head: "Computer Science",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
  },
  {
    id: 11,
    img: img,
    tag: "Business",
    head: "Accounting and Finance",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
  },
  {
    id: 12,
    img: img3,
    tag: "Engineering",
    head: "Civil Engineering",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
  },
];

const latestNews = [
  {
    id: 13,
    img: img2,
    tag: "Business",
    head: "Hospitality Programs",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
  },
  {
    id: 14,
    img: img,
    tag: "Engineering",
    head: "Petroleum Engineering",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
  },
  {
    id: 15,
    img: img3,
    tag: "Business",
    head: "Marketing",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
  },
];

const Business = [
  {
    id: 16,
    img: img3,
    let: 'studies',
    tag: "Business",
    head: "Hospitality Programs",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
  },
  {
    id: 17,
    img: img,
    let: 'studies',
    tag: "Business",
    head: "Procurement and Logistics",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
  },
  {
    id: 18,
    img: img2,
    let: 'studies',
    tag: "Business",
    head: "Marketing",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
  },
];

const cse = [
  {
    id: 19,
    img: img,
    let: 'cse',
    tag: "Engineering",
    head: "Computer Science",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
  },
];

const bank = [
  {
    id: 20,
    img: img1,
    let: 'bank',
    tag: "Business",
    head: "Accounting and Finance",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
  },
];

const social = [
  {
    id: 21,
    img: img2,
    let: 'social',
    tag: "Social",
    head: "Swasa",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
  },
];

const eng = [
  {
    id: 22,
    let: 'civil',
    img: img3,
    tag: "Engineering",
    head: "Civil Engineering",
    content: "We have fully funded scholaship in Marketing, Civil Engineering",
  },
];

const all = [Business, bank, social,eng]

export { latestCourses, latestNews, cse, Business, bank, social, data, eng, all };
