
import './App.css'
import Alert from './Components/ui/Alert/Alert'

import { Bell, Ban, Scroll, SearchCheck, TriangleAlert } from 'lucide-react';

function App() {

  return (
    <>
      
      <Alert
        type='alert-upgrade' 
        icon={<Bell size={20} />} 
        title='Somethimg went wrong'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ducimus esse, illo laboriosam ipsa iure accusamus consectetur quaerat perspiciatis, eius quidem accusantium officiis voluptatibus, aliquam enim nemo numquam natus eveniet!'
      />

      <Alert
        type='alert-note' 
        icon={<Scroll size={20} />} 
        title='Somethimg went wrong'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ducimus esse, illo laboriosam ipsa iure accusamus consectetur quaerat perspiciatis, eius quidem accusantium officiis voluptatibus, aliquam enim nemo numquam natus eveniet!'
      />

      <Alert
        type='alert-processed' 
        icon={<SearchCheck size={20} />} 
        title='Somethimg went wrong'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ducimus esse, illo laboriosam ipsa iure accusamus consectetur quaerat perspiciatis, eius quidem accusantium officiis voluptatibus, aliquam enim nemo numquam natus eveniet!'
      />

      <Alert
        type='alert-tips' 
        icon={<TriangleAlert size={20} />} 
        title='Somethimg went wrong'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ducimus esse, illo laboriosam ipsa iure accusamus consectetur quaerat perspiciatis, eius quidem accusantium officiis voluptatibus, aliquam enim nemo numquam natus eveniet!'
      />


      <Alert
        type='alert-error' 
        icon={<Ban size={20} />} 
        title='Somethimg went wrong'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ducimus esse, illo laboriosam ipsa iure accusamus consectetur quaerat perspiciatis, eius quidem accusantium officiis voluptatibus, aliquam enim nemo numquam natus eveniet!'
      />
    </>
  )
}

export default App
